import React, { useState, useEffect, useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {useParams} from 'react-router-dom'
import {BASE_URL} from '../../constants/urls'
import axios from 'axios'
import {useNoAddress} from '../../hooks/useNoAddress'
import FoodCard from '../../components/FoodCard/FoodCard'
import {goToEditAdressPage} from '../../routes/coordinator'
import {MainContainer} from './styled'

const RestaurantPage =()=> {
    const {cart, setCart} = useContext(GlobalStateContext)
    const [restaurantInfo, setRestaurantInfo] = useState(false)
    const pathParams = useParams()
    // const token = window.localStorage.getItem('token')
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InExU01sNmpzNHlCc2JIVjN1OTU4IiwibmFtZSI6IkNoZXdiYWNjYSIsImVtYWlsIjoiY2hld3lAZ21haWwuY29tIiwiY3BmIjoiODg2Ljk5NS43MTAtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjIwMTU3MTE0fQ.40pswwJdX8mLumA-W-GoEUNQg9mN-xgCp44i3oNy88s"

    // useProtectedPage()
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
            setRestaurantInfo(restaurantDetails.data.restaurant)
        }catch(error){
            console.log(error.response)
            alert('Ocorreu um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde.')
        }
    }

    const addToCard = (product) =>{
        console.log(product.name)
    }
    console.log(restaurantInfo.products)
    return (
        <MainContainer>
            {!restaurantInfo.products ?
            <p>Loading...</p> :
            <>
            <h1>{restaurantInfo.name}</h1>
            {restaurantInfo.products.map((product)=>{
                return <FoodCard 
                key={product.key}
                name={product.name}
                image={product.photoUrl}
                description={product.description}
                price={product.price}
                addToCard={()=>addToCard(product)}
                />
            })}
            </>}
        </MainContainer>
    )
}

export default RestaurantPage
