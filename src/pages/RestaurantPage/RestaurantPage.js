import React, { useState, useEffect, useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import Popper from '@material-ui/core/Popper'
import Popover from '@material-ui/core/Popover'
import Fade from '@material-ui/core/Fade'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import { useNoAddress } from '../../hooks/useNoAddress'
import FoodCard from '../../components/FoodCard/FoodCard'
import Loading from '../../components/Loading/Loading'
import { goToEditAddressPage } from '../../routes/coordinator'
import { MainContainer, PopperContainer } from './styled'

const RestaurantPage = () => {
    const { cart, setCart } = useContext(GlobalStateContext)
    const [restaurantInfo, setRestaurantInfo] = useState(false)
    const [openPopper, setOpenPopper] = useState(false)
    const pathParams = useParams()
    // const token = window.localStorage.getItem('token')
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InExU01sNmpzNHlCc2JIVjN1OTU4IiwibmFtZSI6IkNoZXdiYWNjYSIsImVtYWlsIjoiY2hld3lAZ21haWwuY29tIiwiY3BmIjoiODg2Ljk5NS43MTAtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjIwMjE5NDk5fQ.GiDCLnmWusR-uVTcEHsvzZqJFNMUGw22XkG5uxggN3Q"

    // useProtectedPage()
    useNoAddress()

    useEffect(() => {
        getRestaurantDetails()
    }, [])

    const getRestaurantDetails = async () => {
        try {
            let restaurantDetails = await axios.get(`${BASE_URL}restaurants/${pathParams.id}`, {
                headers: {
                    auth: token,
                }
            })
            setRestaurantInfo(restaurantDetails.data.restaurant)
        } catch (error) {
            console.log(error.response)
            alert('Ocorreu um erro no sistema e estamos trabalhando para resolvê-lo. Por favor, tente novamente mais tarde.')
        }
    }

    const addToCard = (product) => {
        console.log(cart)
        let newCart = [...cart]
        newCart.push(product)
        setCart(newCart)
    }
    console.log(restaurantInfo.products)
    console.log(cart)
    return (
        <MainContainer>
            {!restaurantInfo.products ?
                <Loading /> :
                <>
                    <Popover
                        open={openPopper}
                        onClose={() => { setOpenPopper(false) }}
                        anchor='center'
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                    >
                        <PopperContainer>
                            <h3>Teste</h3>
                        </PopperContainer>
                    </Popover>
                    <h1>{restaurantInfo.name}</h1>
                    {restaurantInfo.products.map((product) => {
                        return <FoodCard
                            key={product.id}
                            name={product.name}
                            image={product.photoUrl}
                            description={product.description}
                            price={product.price}
                            // addToCart={() => addToCard(product)}
                            addToCart={() => { setOpenPopper(true) }}
                        />
                    })}
                </>}
        </MainContainer>
    )
}

export default RestaurantPage
