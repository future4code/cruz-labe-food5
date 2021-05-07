import React, { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import {
  AddressContainer,
  AddressTitle,
  Title,
  Shipping,
  PackageContainer,
  Total,
  TotalPrice,
  CheckBox,
  PaymentMethod,
  Button,
  ButtonContainer,
} from "./styled.js";
import CartFoodInfoCard from "../../components/CartFoodInfoCard/CartFoodInfoCard";
import { getAddress } from "../../services/users";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import {goToHomePage} from '../../routes/coordinator'

export const CartPage = () => {
  const { cart, setCart, restaurantIdForCart, setRestaurantIdForCart, restaurantShipping, 
  setRestaurantShipping } = useContext(GlobalStateContext);
  const [payMethod, setPayMethod] = useState("");
  const [profile, setProfile] = useState({});
  // const [userAddress, setUserAddress] = useState(undefined);
  const history = useHistory();
  
  useEffect(() => {
    document.title = "4Food Y♥U";
    getProfile();
  }, []);

  const handleChange = (e) => {
    setPayMethod(e.target.value);
  };

  const getProfile = () => {
    axios
      .get(`${BASE_URL}profile`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        }
      })
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addItem = (id) => {
    const newProducts = cart.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity + 1;
        const completeProduct = {
          ...product,
          quantity: newQuantity,
        };
        return completeProduct;
      } else {
        return product;
      }
    });
    const newCart = { ...newProducts };
    setCart.setCart(newCart);
  };
  const subtractItem = (id) => {
    const newProducts = cart.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1;
        const completeProduct = {
          ...product,
          quantity: newQuantity,
        };
        return completeProduct;
      } else {
        return product;
      }
    });
    const newCart = { ...newProducts };
    setCart.setCart(newCart);
  };

  const placeOrder = (body) => {
    axios
      .post(`${BASE_URL}restaurants/${restaurantIdForCart}/order`, body, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        goToHomePage(history);
      })
      .catch((error) => {
        const errorArray = error.message.split(" ");
        if (errorArray[errorArray.length - 1] === "409") {
          alert("Você já tem um pedido em andamento!");
        }
        console.log(error.message);
      });
  };

  const sendOrder = () => {
    if (!payMethod) {
      alert("Selecione um método de pagamento!");
    } else if (Object.entries(cart).length !== 0) {
      const productsArray = cart.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
          };
        });
      const body = {
        products: productsArray,
        paymentMethod: payMethod,
      };
      placeOrder(body);
      setCart([])
    } else {
      alert("Escolha um produto!");
    }
  };
  const calculateSubtotal = () => {
    let sum = 0;
    if (Object.entries(cart).length !== 0) {
      cart.forEach((item) => {
        sum += item.price * item.quantity;
      });
      return restaurantShipping + sum;
    }
    return 0;
  };
  return <PackageContainer>
    <AddressContainer>
      <AddressTitle>Endereço de entrega</AddressTitle>
      {profile.address}
    </AddressContainer>

    {Object.entries(cart).length !== 0 ? (
      // eslint-disable-next-line array-callback-return
      cart.map((product) => {
          return (
            <CartFoodInfoCard
              id={product.id}
              key={product.id}
              quantity={product.quantity}
              photoUrl={product.photoUrl}
              name={product.name}
              description={product.description}
              price={product.price}
              addItem={() => addItem(product.id)}
              subtractItem={() => subtractItem(product.id)}
            />
          );
      })
    ) : (
      <Title>•Carrinho Vazio•</Title>
    )}

    <Shipping>
      Frete{" "}
      {new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(restaurantShipping || 0)}
    </Shipping>
    <Total>
      <p>SUBTOTAL</p>
      <TotalPrice>
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(calculateSubtotal())}
      </TotalPrice>
    </Total>
    <PaymentMethod>Forma de pagamento</PaymentMethod>
    <CheckBox>
      <FormControl component="fieldset" required={true}>
        <RadioGroup
          name="paymentMethod"
          value={payMethod}
          onChange={handleChange}
        >
          <FormControlLabel
            value="money"
            control={<Radio color="primary" />}
            label="Dinheiro"
          />
          <FormControlLabel
            value="creditcard"
            control={<Radio color="primary" />}
            label="Cartão de crédito"
          />
        </RadioGroup>
      </FormControl>
    </CheckBox>
    <ButtonContainer>
      <Button onClick={sendOrder}>Confirmar Compra♥</Button>
    </ButtonContainer>
  </PackageContainer>
  // );
}

export default CartPage;
