/* eslint-disable no-unused-vars */

import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import { useForm } from '../../hooks/useForm'
import { goToProfilePage } from '../../routes/coordinator'
import { DivContainer, Form, Header, StyledButton, StyledInput } from './styled'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {IconButton} from "@material-ui/core";

const InitialState = {
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
}
const EditAddressPage = () => {
    const [form, setForm, handleForm, resetForm] = useForm(InitialState)
    const history = useHistory();


    const editAddress = () => {
        axios.put(`${BASE_URL}address`, form, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                window.localStorage.setItem("token", res.data.token)
                resetForm()
                goToProfilePage(history)
            })
            .catch((err) => {
                console.log(err)
                resetForm()
            })
    }

    const handleClick = (event) => {
        editAddress()
        event.preventDefault()
    };

    return (
        <DivContainer>
            <Header>
                <IconButton onClick={() => goToProfilePage(history)}><ArrowBackIosIcon/></IconButton>
                <p>Endereço</p>
            </Header>
            <Form onSubmit={handleClick}>
                <StyledInput
                    required
                    name="street"
                    label="Logradouro"
                    placeholder="Rua / Av"
                    variant="outlined"
                    value={form.street}
                    onChange={handleForm}
                    type="text"
                    fullWidth
                    margin={'normal'}
                />
                <StyledInput
                    required
                    name="number"
                    label="Número"
                    placeholder="número"
                    variant="outlined"
                    value={form.number}
                    onChange={handleForm}
                    type="text"
                    fullWidth
                    margin={'normal'}
                />
                <StyledInput
                    name="complement"
                    label="Complemento"
                    placeholder="Apto. / Bloco"
                    variant="outlined"
                    value={form.complement}
                    onChange={handleForm}
                    type="text"
                    fullWidth
                    margin={'normal'}
                />
                <StyledInput
                    required
                    name="neighbourhood"
                    label="Bairro"
                    placeholder="Bairro"
                    variant="outlined"
                    value={form.neighbourhood}
                    onChange={handleForm}
                    type="text"
                    fullWidth
                    margin={'normal'}
                />
                <StyledInput
                    required
                    name="city"
                    label="Cidade"
                    placeholder="Cidade"
                    variant="outlined"
                    value={form.city}
                    onChange={handleForm}
                    type="text"
                    fullWidth
                    margin={'normal'}
                />
                <StyledInput
                    required
                    name="state"
                    label="Estado"
                    placeholder="Estado"
                    variant="outlined"
                    value={form.state}
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

export default EditAddressPage