import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import logo from "../../assets/logo-future-eats-invert.png";
import { useHistory } from "react-router";
import { goToEditAddressPage, goToLoginPage } from "../../routes/coordinator";
import {
  DivContainer,
  Header,
  StyledInput,
  StyledButton,
  Form,
} from "./styled";
import axios from "axios";
import { useForm } from "../../hooks/useForm";

const SignUpPage = () => {
  const history = useHistory();
  const [confirm, setConfirm] = useState("");
  const InitialState = {
    name: "",
    email: "",
    cpf: "",
    password: "",
  };
  const [form, setForm, handleForm, resetForm] = useForm(InitialState);
  const handleConfirm = (event) => {
    setConfirm(event.target.value);
  };

  const signUp = () => {
    axios
      .post(`${BASE_URL}signup`, form)
      .then((res) => {
          if(confirm === form.password){
          window.localStorage.setItem("token", res.data.token)
          resetForm()
          goToEditAddressPage(history)
        } else {
          alert("A senha precisa ser idêntica!")
          resetForm()
          setConfirm("")
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
        resetForm();
        setConfirm("");
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    signUp();
  };

  return (
    <DivContainer>
      <Header>
        <button onClick={() => goToLoginPage(history)}>voltar</button>
      </Header>
      <img src={logo} alt="" />
      <p>Cadastrar</p>
      <Form onSubmit={handleClick}>
        <StyledInput
          required
          name="name"
          label="Nome"
          placeholder="Nome e sobrenome"
          variant="outlined"
          value={form.name}
          onChange={handleForm}
          type="text"
          margin={"normal"}
        />
        <StyledInput
          required
          name="email"
          label="E-mail"
          placeholder="email@email.com"
          variant="outlined"
          value={form.email}
          onChange={handleForm}
          type="text"
          margin={"normal"}
          inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"}}
        />
        <StyledInput
          required
          name="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          variant="outlined"
          value={form.cpf}
          onChange={handleForm}
          type="text"
          margin={"normal"}
          inputProps={{ pattern: "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" }}
        />
        <StyledInput
          required
          name="password"
          label="Senha"
          placeholder="Mínimo 6 caracteres"
          variant="outlined"
          value={form.password}
          onChange={handleForm}
          type="password"
          margin={"normal"}
          inputProps={{ pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$"}}
        />
        <StyledInput
          required
          label="Confirmar senha"
          placeholder="Confirme a senha anterior"
          variant="outlined"
          type="password"
          value={confirm}
          onChange={handleConfirm}
          margin={"normal"}
        />
        <StyledButton type="submit" variant="contained" color="primary">
          Cadastrar
        </StyledButton>
      </Form>
    </DivContainer>
  );
};

export default SignUpPage;
