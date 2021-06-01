import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import OutlinedInput from'@material-ui/core/OutlinedInput'

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
height: 4rem;
margin: 0 0 1.5rem;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);  
`;

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

export const StyledPassword = styled(OutlinedInput)`
  width: 20.5rem;
  height: 3.5rem;
`