import React from 'react'
import { ScreenContainer, Form, SignUpContainer } from './styled'
import logo from "../../assets/logo-future-eats-invert.png"
import { Button, TextField } from '@material-ui/core'
import { useForm} from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import {goToSignUpPage} from '../../routes/coordinator'
import {login} from '../../services/users'

const LoginPage =() => {
    const history = useHistory()
    const [form, setForm, handleForm, resetForm] = useForm({email:'', password:''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, resetForm, history)
    }
    return (
        <ScreenContainer>
            <img src={logo} alt='invert_logo'/>
                <h1>Entrar</h1>
            <Form>
                <form onSubmit = {onSubmitForm} >
                    <TextField
                    name={'email'}
                    type={'email'}
                    value={form.email}
                    onChange={handleForm}
                    label={'e-mail'}
                    variant={'outlined'}
                    required
                    fullWidth
                    margin={'normal'}
                    />
                    <TextField
                        name={'password'}
                        type={'password'}
                        value={form.password}
                        onChange={handleForm}
                        label={'senha'}
                        variant={'outlined'}
                        required
                        fullWidth
                        margin={'normal'}
                    />
                    <Button 
                    type={'submit'}
                    variant={'contained'}
                    color={'primary'}
                    fullWidth
                    >Entrar</Button>
                    <SignUpContainer>
                        <Button onClick={() => goToSignUpPage(history)}
                        type={'submit'}
                        variant={'text'}
                        fullWidth>
                            Não é cadastrado? Clique aqui!
                        </Button>
                    </SignUpContainer>
                </form>
            </Form>
        </ScreenContainer>
    )
}

export default LoginPage