import React, { useState, useEffect, useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {useParams} from 'react-router-dom'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'
import {useNoAddress} from '../../hooks/useNoAddress'
import {goToEditAdressPage} from '../../routes/coordinator'

const RestaurantPage =()=> {
    const {cart, setCart} = useContext(GlobalStateContext)
    const [restaurantInfo, setRestaurantInfo] = useState(false)
    const pathParams = useParams()
    const token = window.localStorage.getItem('token')

    useProtectedPage()
    useNoAddress()

    useEffect(()=>{
        getRestaurantDetails()
    }, [])

    const getRestaurantDetails = async() =>{
        try{
            let restaurantDetails = await axios.get(`${BASE_URL}restaurants/${pathParams.id}`, {
                headers:{
                    auth: token,
                }
            })
            // if(restaurantDetails.message==="Usuário não possui endereço cadastrado"){
            //     //DIRECIONAR USUÁRIO PARA A PÁGINA DE CRIAÇÃO DE ENDEREÇO
            // }
            console.log(restaurantDetails.data)
        }catch(error){
            // if(error.response.message==="Usuário não possui endereço cadastrado"){
            //     //DIRECIONAR USUÁRIO PARA A PÁGINA DE CRIAÇÃO DE ENDEREÇO
            // }
            console.log(error.response)
        }
    }
    
    return (
        <div>
            <h1>RestaurantPage</h1>
        </div>
    )
}

export default RestaurantPage
