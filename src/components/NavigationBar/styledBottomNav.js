import styled from "styled-components";
import { grayScale } from "../../constants/colors";

export const BottomNav = styled.div`
  width: 100vw;
  max-width: 420px;
  height: 60px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #b8b8b8;
  margin-top: 64px;
  background-color: ${grayScale};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
