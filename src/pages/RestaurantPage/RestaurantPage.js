
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
import { MainContainer, PopperContainer, CategoryName, RestaurantInfoContainer } from "./styled";

const RestaurantPage = () => {
  const { cart, setCart } = useContext(GlobalStateContext)
  const [restaurantInfo, setRestaurantInfo] = useState(false)
  const [categories, setCategories] = useState([])
  const pathParams = useParams()
  const token = window.localStorage.getItem('token')


  useProtectedPage();
  useNoAddress();

  useEffect(() => {
    getRestaurantDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    console.log(cart)
  }, [cart])

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const getRestaurantDetails = async () => {
    try {
      let restaurantDetails = await axios.get(`${BASE_URL}restaurants/${pathParams.id}`, {
        headers: {
          auth: token,
        }
      })
      const categoriesOnly = restaurantDetails.data.restaurant.products.map((product) => {
        return product.category
      })
      const filteredCategoriesOnly = categoriesOnly.filter((category, index) => {
        return categoriesOnly.indexOf(category) === index
      })
      const restaurantCategories = filteredCategoriesOnly.map((category) => {
        return {
          category: category,
          products: restaurantDetails.data.restaurant.products.filter((product) => {
            return category === product.category
          })
        }
      })
      setCategories(restaurantCategories)
      setRestaurantInfo(restaurantDetails.data.restaurant)
    } catch (error) {
      console.log(error.response)
      alert('Ocorreu um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde.')

    }
  }

  return (
    <MainContainer>
      {console.log(restaurantInfo)}
      {!restaurantInfo.products ?
        <Loading /> :
        <>
          <RestaurantInfoContainer>
            <img src={restaurantInfo.logoUrl} alt={restaurantInfo.name}/>
            <h2>{restaurantInfo.name}</h2>
            <p>{restaurantInfo.category}</p>
            <p>{restaurantInfo.deliveryTime} min</p>
            <p>Frete: R${restaurantInfo.shipping}</p>
            <p>{restaurantInfo.address}</p>
          </RestaurantInfoContainer>
          {categories.map((category) => {
            return <>
              <CategoryName>{category.category}</CategoryName>
              {category.products.map((product) => {
                return <>
                  <FoodCard
                    product={product}
                    key={product.id}
                    name={product.name}
                    image={product.photoUrl}
                    description={product.description}
                    price={product.price}
                  />
                </>
              })}
            </>
          })}
        </>}
    </MainContainer>
  )
}


export default RestaurantPage;
