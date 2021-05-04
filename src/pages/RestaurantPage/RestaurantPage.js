import React, { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

const RestaurantPage =()=> {
    const {cart, setCart} = useContext(GlobalStateContext)
    
    return (
        <div>
            <h1>RestaurantPage</h1>
        </div>
    )
}

export default RestaurantPage
