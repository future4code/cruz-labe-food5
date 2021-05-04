import React, { useState, useEffect, useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import {useParams} from 'react-router-dom'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'

const RestaurantPage =()=> {
    const {cart, setCart} = useContext(GlobalStateContext)
    const [restaurantInfo, setRestaurantInfo] = useState(false)
    const pathParams = useParams()
    const token = window.localStorage.getItem('token')

    useEffect(()=>{
        getRestaurantDetails()
    }, [])

    const getRestaurantDetails = async() =>{
        try{
            let restaurantDetails = await axios.get(`${BASE_URL}restaurants/${pathParams.id}`, {
                headers:{
                    // Authorization: token
                    auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InExU01sNmpzNHlCc2JIVjN1OTU4IiwibmFtZSI6IkNoZXdiYWNjYSIsImVtYWlsIjoiY2hld3lAZ21haWwuY29tIiwiY3BmIjoiODg2Ljk5NS43MTAtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjIwMTQxMTE3fQ.JD-eStuXa2Ijr75avPTHBJnRJNswlEuE0HyWuhmH5cM',
                }
            })
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
