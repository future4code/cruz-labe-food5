import React from "react";
import {BASE_URL} from "../../constants/urls"
import logo from "../../assets/logo-future-eats-invert.png";
import { useHistory } from "react-router";
import {goToEditAdressPage, goToLoginPage} from "../../routes/coordinator"
import {
    DivContainer,
    Header, 
    StyledInput,
    StyledButton,
    Form
} from "./styled"
import axios from "axios";
import {useForm} from "../../hooks/useForm"

const SignUpPage = () => {
  const history = useHistory();

    const InitialState = {
        name: "",
        email: "",
        cpf: "",
        password: ""
    }

    const [form, setForm, handleForm, resetForm] = useForm(InitialState)

  const signUp = () => {
      axios.post(`${BASE_URL}signup`, form
      ).then((res) => {
          window.localStorage.setItem("token", res.data.token)
          resetForm()
          goToEditAdressPage(history)
      }).catch((err) => {
          console.log(err.response.data.message)
          resetForm()
      })
  }

  const handleClick = () => {
    signUp()
  };

  return (
    <DivContainer>
      <Header>
        <button onClick={() => goToLoginPage(history)}>voltar</button>
      </Header>

      <img src={logo}/>

      <p>Cadastrar</p>

        <Form>
        <StyledInput
          required
          name="name"
          label="Nome"
          placeholder="Nome e sobrenome"
          variant="outlined"
          value={form.name}
          onChange={handleForm}
          type="text"
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
        />
        <StyledInput
          required
          label="Confirmar senha"
          placeholder="Confirme a senha anterior"
          variant="outlined"
          type="password"
        />
        <StyledButton onClick={() => handleClick()} variant="contained" color="primary"> Cadastrar </StyledButton>
        </Form>

    </DivContainer>
  );
};

export default SignUpPage;
