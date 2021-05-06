import React, {useState, useEffect} from 'react'
import BottomNavigation from '../../components/NavigationBar/BottomNavigation'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import { CardContainer, ContainerHome, FoodImg, SearchForm } from './styled'
import TextField from '@material-ui/core/TextField'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import { CardContent } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'


const HomePage =()=> {
    useProtectedPage()
    const history = useHistory()
    const restaurants = useRequestData([], `${BASE_URL}restaurants`).restaurants
    const [form, setForm, handleForm, resetForm] = useForm({search:''})
    const [renderedRestaurants, setRenderedRestaurants] = useState([])
    
    useEffect(() => {
        setRenderedRestaurants(restaurants)
    },[restaurants]) 
    
    useEffect(() => {
        searchRestaurants()
        console.log(form.search)
    }, [form.search])


    const searchRestaurants= (event) => {
        event.preventDefault()
        if (form.search) {
            let newRestaurants = restaurants.filter((restaurants) => {
                return (restaurants.name.toLowerCase().includes(form.search.toLowerCase()) || restaurants.category.toLowerCase().includes(form.search.toLowerCase()))
            })
            setRenderedRestaurants(newRestaurants)
        } else {
            setRenderedRestaurants(restaurants)
        }
    }
    

    const handleClick = (event) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    return (
        <ContainerHome>
            <SearchForm>
            <TextField
                label='search'
                value={form.search}
                name="search"
                onChange={handleForm}
                type="text"
                variant="outlined"
                />
            </SearchForm>
        
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                Material-UI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Core
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Core
                </Link>
            </Breadcrumbs>
            {restaurants && restaurants.map((restaurants) => {
            return (
             <CardContainer>
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

export default HomePage