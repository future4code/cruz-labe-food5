import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    
    const data = {
        cart,
        setCart
    }

    return(
        <GlobalStateContext.Provider
            value={data}>
                {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState