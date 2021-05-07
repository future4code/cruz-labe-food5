import React, {useState, useEffect} from 'react'
import BottomNavigation from '../../components/NavigationBar/BottomNavigation'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import { CardContainer, ContainerHome, FoodImg, SearchForm } from './styled'
import TextField from '@material-ui/core/TextField'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import { CardContent } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { goToRestaurantPage } from '../../routes/coordinator'


const HomePage =()=> {
    useProtectedPage()
    const history = useHistory()
    // const restaurants = useRequestData([], `${BASE_URL}restaurants`).restaurants
    const [form, setForm, handleForm, resetForm] = useForm({search:''})
    const [renderedRestaurants, setRenderedRestaurants] = useState([])
    const [categories, setCategories] = useState([])
    const [restaurants, setRestaurants] = useState([])
    

    useEffect(() => {
        setRenderedRestaurants(restaurants)
    },[restaurants]) 
    
    useEffect(() => {
        searchRestaurants()
        console.log(form.search)
    }, [form.search])

    useEffect(() =>{
        getRestaurants()
    },[])

    const getRestaurants = async() =>{
        try{
            const res = await axios.get(`${BASE_URL}restaurants`, {
                headers:{
                    auth: window.localStorage.getItem('token')
                }
            })
            const restaurantCategories = res.data.restaurants.map((restaurants) =>{
                return(restaurants.category) 
            })
            const singleCategory = restaurantCategories.filter((category, index) => {
                return(restaurantCategories.indexOf(category) === index)
            })
            setCategories(singleCategory)
            setRestaurants(res.data.restaurants)
        }catch(err){
            console.log(err)
        }
        
    }


    const searchRestaurants= () => {
        if (form.search) {
            let newRestaurants = restaurants.filter((restaurants) => {
                return (restaurants.name.toLowerCase().includes(form.search.toLowerCase()) || restaurants.category.toLowerCase().includes(form.search.toLowerCase()))
            })
            setRenderedRestaurants(newRestaurants)
        } else {
            setRenderedRestaurants(restaurants)
        }
    }


    const handleClick = (category) => {
        const newRender = restaurants.filter((restaurants) => {
            return(
                category === restaurants.category
            )
        })
        setRenderedRestaurants(newRender)
    }



    return (
        <ContainerHome>
            <div>
            <TextField
                label='search'
                value={form.search}
                name="search"
                onChange={handleForm}
                type="text"
                variant="outlined"
                />
            </div>
        
            <Breadcrumbs aria-label="breadcrumb">
                {categories && categories.map((category) =>{
                    return(
                        <p color="inherit" href="/" onClick={() => handleClick(category)}>
                            {category}
                        </p>
                    )
                })}
            </Breadcrumbs>
            {renderedRestaurants && renderedRestaurants.map((restaurants) => {
            return (
             <CardContainer onClick={() => history.push(`/restaurant/${restaurants.id}`)}>
            <FoodImg src={restaurants.logoUrl} alt="logo_restaurante"/>
            <CardContent>
             <p>{restaurants.name}</p>
             <p>{restaurants.deliveryTime}</p>
             <p>{restaurants.shipping}</p>
            </CardContent>
                   
            </CardContainer>
         )
            })}
            <BottomNavigation/>
        </ContainerHome>
    )
}


export default HomePage;
