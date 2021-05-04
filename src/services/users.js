import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToHomePage } from '../routes/coordinator'

export const login = (body, resetForm, history) => {
    axios.post(`${BASE_URL}`/'login', body) 
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        resetForm()
        goToHomePage(history)
    }) 
    .catch((error) => {
        alert(error.response.data.message)
    })
}

export const signUp = (body, resetForm, history) => {
    axios.post(`${BASE_URL}`/'signup', body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        resetForm()
        goToHomePage(history)

    })
    .catch((error) => {
        alert(error.response.data.message)
    })
}