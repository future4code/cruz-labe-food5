import React from 'react'
import { useHistory } from 'react-router';
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { goToProfilePage } from '../../routes/coordinator'
import { DivContainer, Form, StyledButton, StyledInput } from './styled';
import { useForm } from '../../hooks/useForm'

const InitialState = {
    name: "",
    email: "",
    cpf: "",
}

const EditProfilePage =()=> {
    const [form, setForm, handleForm, resetForm] = useForm(InitialState)
    const history = useHistory();

    const editProfile = () => {
        axios.put(`${BASE_URL}profile`, form, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                resetForm()
                goToProfilePage(history)
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response.data.message)
                resetForm()
            })
    }

    const handleClick = (event) => {
        editProfile()
        event.preventDefault()
    };

    return (
        <DivContainer>
            <h1>EditProfilePage</h1>
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
                    fullWidth
                    margin={'normal'}
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
                    fullWidth
                    margin={'normal'}
                />
                <StyledInput
                    name="cpf"
                    label="CPF"
                    placeholder="000.000.000-00"
                    variant="outlined"
                    value={form.cpf}
                    onChange={handleForm}
                    type="text"
                    fullWidth
                    margin={'normal'}
                />
                <StyledButton type="submit" variant="contained" color="primary"> Salvar </StyledButton>
            </Form>
        </DivContainer>
    )
}

export default EditProfilePage