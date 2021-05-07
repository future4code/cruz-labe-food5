import styled from "styled-components";
import { grayScale, darkColor } from "../../constants/colors";

export const HeaderContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr;
`;

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #b8b8b8;
  background-color: ${grayScale};
  text-align: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  margin-right: 50px;
  height: 44px;
  text-align: center;
  height: 19px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  text-align: center;
  color: ${darkColor};
`;
