import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import theme from "../../constants/theme"

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled(TextField)`
  width: 20.5rem;
  height: 3.5rem;
`;

export const StyledButton = styled(Button)`
width: 20.5rem;
height: 3.5rem;
`;
