import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    // const [openPopper, setOpenPopper] = useState(false)
    
    const data = {
        cart,
        setCart,
        // openPopper, 
        // setOpenPopper
    }

    return(
        <GlobalStateContext.Provider
            value={data}>
                {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState