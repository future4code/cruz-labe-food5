/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  ScreenContainer,
  Form,
  SignUpContainer,
  StyledInput,
  StyledPassword,
  StyledButton,
} from "./styled";
import logo from "../../assets/logo-future-eats-invert.png";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router";
import { goToSignUpPage } from "../../routes/coordinator";
import { login } from "../../services/users";
import {
  InputLabel,
  IconButton,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const LoginPage = () => {
  const history = useHistory();
  const [form, setForm, handleForm, resetForm] = useForm({
    email: "",
    password: "",
  });

  const [visiblePassword, setVisiblePassword] = useState(false);
  const handleClickVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, resetForm, history);
  };
  return (
    <ScreenContainer>
      <img src={logo} alt="invert_logo" />
      <h3>Entrar</h3>

      <Form onSubmit={onSubmitForm}>
        <StyledInput
          required={true}
          name="email"
          label="E-mail"
          placeholder="email@email.com"
          variant="outlined"
          value={form.email}
          onChange={handleForm}
          type="text"
          margin={"normal"}
          inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" }}
        />
        <FormControl
          variant="outlined"
          required="true"
          style={{ margin: "8px 0" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <StyledPassword
            required={true}
            label="Senha"
            value={form.password}
            type={visiblePassword ? "text" : "password"}
            name="password"
            placeholder="6 caracteres, com letra e números"
            onChange={handleForm}
            inputProps={{
              pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickVisiblePassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {visiblePassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <StyledButton
          type={"submit"}
          variant={"contained"}
          color={"primary"}
          fullWidth
        >
          Entrar
        </StyledButton>
        <SignUpContainer>
          <StyledButton
            onClick={() => goToSignUpPage(history)}
            type={"submit"}
            variant={"text"}
            fullWidth
          >
            Não é cadastrado? Clique aqui!
          </StyledButton>
        </SignUpContainer>
      </Form>
    </ScreenContainer>
  );
};

export default LoginPage;
