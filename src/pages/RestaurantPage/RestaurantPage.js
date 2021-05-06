/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Popper from "@material-ui/core/Popper";
import Popover from "@material-ui/core/Popover";
import Fade from "@material-ui/core/Fade";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { useNoAddress } from "../../hooks/useNoAddress";
import { useForm } from "../../hooks/useForm";
import FoodCard from "../../components/FoodCard/FoodCard";
import Loading from "../../components/Loading/Loading";
import { goToEditAddressPage } from "../../routes/coordinator";
import { MainContainer, PopperContainer, CategoryName } from "./styled";

const RestaurantPage = () => {
  const { cart, setCart } = useContext(GlobalStateContext);
  const [restaurantInfo, setRestaurantInfo] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [form, setForm, handleForm, resetForm] = useForm({ quantity: 0 });
  const pathParams = useParams();
  const token = window.localStorage.getItem("token");
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InExU01sNmpzNHlCc2JIVjN1OTU4IiwibmFtZSI6IkNoZXdiYWNjYSIsImVtYWlsIjoiY2hld3lAZ21haWwuY29tIiwiY3BmIjoiODg2Ljk5NS43MTAtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjIwMjE5NDk5fQ.GiDCLnmWusR-uVTcEHsvzZqJFNMUGw22XkG5uxggN3Q"

  useProtectedPage();
  useNoAddress();

  useEffect(() => {
    getRestaurantDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRestaurantDetails = async () => {
    try {
      let restaurantDetails = await axios.get(
        `${BASE_URL}restaurants/${pathParams.id}`,
        {
          headers: {
            auth: token,
          },
        }
      );
      const productsWithQuantity = restaurantDetails.data.restaurant.products.map(
        (product) => {
          return { ...product, quantity: 0 };
        }
      );
      const categoriesOnly = restaurantDetails.data.restaurant.products.map(
        (product) => {
          return product.category;
        }
      );
      const filteredCategoriesOnly = categoriesOnly.filter(
        (category, index) => {
          return categoriesOnly.indexOf(category) === index;
        }
      );
      const restaurantCategories = filteredCategoriesOnly.map((category) => {
        return {
          category: category,
          products: productsWithQuantity.filter((product) => {
            return category === product.category;
          }),
        };
      });
      setCategories(restaurantCategories);
      setRestaurantInfo(restaurantDetails.data.restaurant);
    } catch (error) {
      console.log(error.response);
      alert(
        "Ocorreu um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde."
      );
    }
  };

  const setQuantityToZero = () => {
    setForm({ ...form, quantity: 0 });
  };

  const addToCart = (product) => {
    let productWithQuantity = { ...product, quantity: form.quantity };
    let newCart = [...cart];
    newCart.push(productWithQuantity);
    alert(`${product.name} adicionado ao carrinho.`);
    setCart(newCart);
    setForm({ ...form, quantity: 0 });
  };

  const removeFromCart = (product) => {
    let newCart = cart.filter((item) => {
      return item.id !== product.id;
    });
    setCart(newCart);
  };

  const addOrRemove = (product) => {
    let i = 0;
    cart.forEach((item) => {
      if (item.id === product.id) {
        i += 1;
      }
    });
    if (i === 0) {
      addToCart(product);
    } else {
      removeFromCart(product);
    }
  };

  return (
    <MainContainer>
      {!restaurantInfo.products ? (
        <Loading />
      ) : (
        <>
          <h1>{restaurantInfo.name}</h1>
          {categories.map((category) => {
            return (
              <>
                <CategoryName>{category.category}</CategoryName>
                {category.products.map((product) => {
                  return (
                    <>
                      <FoodCard
                        key={product.id}
                        name={product.name}
                        image={product.photoUrl}
                        description={product.description}
                        price={product.price}
                        buttonFunction={() => addOrRemove(product)}
                        inputName={"quantity"}
                        handleChange={handleForm}
                        quantity={form.quantity}
                      />
                    </>
                  );
                })}
              </>
            );
          })}
        </>
      )}
    </MainContainer>
  );
};

export default RestaurantPage;
