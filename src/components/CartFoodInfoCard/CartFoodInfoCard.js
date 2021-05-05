import React from "react";
import {
  CardContainer,
  FoodImg,
  InfoFoodContainer,
  NameIngredientsContainer,
  NameQuantityContainer,
  Quantity,
  FoodName,
  IngredientsContainer,
  PriceButtomContainer,
  FoodPrice,
  ButtonsContainer,
  Button,
} from "./styledFoodInfo";

export default function CartFoodInfoCard(props) {
  return (
    <CardContainer>
      <FoodImg src={props.photoUrl} alt={"Foto do rango"} />

      <InfoFoodContainer>
        <NameIngredientsContainer>
          <NameQuantityContainer>
            <FoodName>{props.name}</FoodName>
            <Quantity quantity={props.quantity}>{props.quantity}</Quantity>
          </NameQuantityContainer>

          <IngredientsContainer>{props.description}</IngredientsContainer>
        </NameIngredientsContainer>

        <PriceButtomContainer>
          <FoodPrice>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(props.price)}
          </FoodPrice>

          <ButtonsContainer>
            <Button onClick={() => props.subtractItem(props.id)} adding={false}>
              -1
            </Button>
            <Button onClick={() => props.addItem(props.id)} adding={true}>
              +1
            </Button>
          </ButtonsContainer>
        </PriceButtomContainer>
      </InfoFoodContainer>
    </CardContainer>
  );
}
