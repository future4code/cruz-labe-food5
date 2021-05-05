import styled from "styled-components";
import { defaultColor, darkColor, grayScale } from "../../constants/colors";

export const CardContainer = styled.article`
  width: 90vw;
  max-width: 420px;
  height: 120px;
  display: grid;
  grid-template-columns: 96px 1fr;
  grid-template-rows: 1fr;
  margin: 10px auto;
  border-radius: 8px;
  border: solid 2px ${grayScale};
`;
export const FoodImg = styled.img`
  width: 96px;
  height: 117px;
  margin: 0 16px 0 0;
  border-radius: 8px 0 0 8px;
  object-fit: cover;
`;
export const InfoFoodContainer = styled.div`
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-rows: 78px 1fr;
`;
export const NameIngredientsContainer = styled.div`
  width: 100%;
`;
export const NameQuantityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Quantity = styled.span`
  ${(props) =>
    props.quantity === 0
      ? "display: none"
      : `width: 33px;
      height: 33px;
      margin: -2px -2px 0 0;
      font-size: 16px;
      padding: 8px 12px 0 12px;
      border-radius: 0 8px 0 8px;
      border: solid 1px ${defaultColor};
      color: ${defaultColor};
      text-align: center;`}
`;
export const FoodName = styled.h3`
  height: 18px;
  margin: 15px 49px 8px 16px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #${grayScale};
`;
export const IngredientsContainer = styled.div`
  width: 95%;
  height: 30px;
  margin: 8px 16px 4px 16px;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: ${grayScale};
  display: flex;
  align-items: center;
`;
export const PriceButtomContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 100px;
  align-items: center;
  margin: 0;
`;
export const FoodPrice = styled.span`
  height: 19px;
  align-self: stretch;
  margin: 10px 8px 5px 16px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: ${darkColor};
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  height: 90%;
  width: 30px;
  margin: 0 -0.5px -4px 0;
  padding: 7px 25px 7px 20px;
  background-color: #${grayScale};
  cursor: pointer;
  outline: none;
  border-radius: 8px ${(props) => (props.adding ? "0" : "8px")} 8px 0;
  border: solid 1px ${(props) => (props.adding ? "#F23535" : "#E12A2A")};
  color: ${(props) => (props.adding ? "##F23535" : "##F2F2F2")};
`;
