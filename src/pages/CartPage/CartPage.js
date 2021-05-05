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
import { getAddress, placeOrder } from "../../services/users";
import { useHistory } from "react-router-dom";

export default function CartPage() {
  window.document.title = "4Food Y♥U";

  const { cart, setCart } = useContext(GlobalStateContext);
  const [payMethod, setPayMethod] = useState("");
  const [userAddress, setUserAddress] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    getAddress(setUserAddress);
  }, []);
  const handleChange = (e) => {
    setPayMethod(e.target.value);
  };
  const addItem = (id) => {
    const newProducts = cart.cart.products.map((product) => {
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
    const newCart = { ...cart.cart, products: newProducts };
    setCart.setCart(newCart);
  };
  const subtractItem = (id) => {
    const newProducts = cart.cart.products.map((product) => {
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
    const newCart = { ...cart.cart, products: newProducts };
    setCart.setCart(newCart);
  };
  const sendOrder = () => {
    if (!payMethod) {
      alert("Selecione um método de pagamento!");
    } else if (Object.entries(cart.cart).length !== 0) {
      const productsArray = cart.cart.products
        .filter((item) => {
          return item.quantity > 0;
        })
        .map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
          };
        });
      const body = {
        products: productsArray,
        paymentMethod: payMethod,
      };
      placeOrder(body, cart.cart.id, history);
    } else {
      alert("Escolha um produto!");
    }
  };
  const calculateSubtotal = () => {
    let sum = 0;
    if (Object.entries(cart.cart).length !== 0) {
      cart.cart.products.forEach((item) => {
        sum += item.price * item.quantity;
      });
      return cart.cart.shipping + sum;
    }
    return 0;
  };
  return (
    <PackageContainer>
      <AddressContainer>
        <AddressTitle>•Endereço de entrega•</AddressTitle>
        {userAddress ? (
          <p>{`${userAddress.street}, ${userAddress.number} - ${userAddress.neighbourhood}`}</p>
        ) : (
          <p>Buscando seu endereço•••</p>
        )}
      </AddressContainer>

      {Object.entries(cart.cart).length !== 0 ? (
        // eslint-disable-next-line array-callback-return
        cart.cart.products.map((product) => {
          if (product.quantity > 0) {
            return (
              <CartFoodInfoCard
                id={product.id}
                key={product.id}
                quantity={product.quantity}
                photoUrl={product.photoUrl}
                name={product.name}
                description={product.description}
                price={product.price}
                addItem={addItem}
                subtractItem={subtractItem}
              />
            );
          }
        })
      ) : (
        <Title>•Carrinho Vazio•</Title>
      )}

      <Shipping>
        Frete{" "}
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(cart.cart.shipping || 0)}
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
  );
}
