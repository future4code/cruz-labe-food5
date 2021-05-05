import React, { useState, useContext } from 'react'
import { FoodCardContainer, PopperContainer } from './style'
import Popover from '@material-ui/core/Popover'
import GlobalStateContext from '../../global/GlobalStateContext'

export default function FoodCard(props) {
    // const {openPopper, setOpenPopper} = useContext(GlobalStateContext)
    const [openPopper, setOpenPopper] = useState(false)

    return (
        <FoodCardContainer>
            <img src={props.image} alt={props.name} />
            <section>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div>
                    <b>R${props.price}</b>
                    <button onClick={()=>{setOpenPopper(true)}}>adicionar</button>
                </div>
            </section>
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
                    <h3>{props.name}</h3>
                    <button onClick={props.addToCart}>Adicionar</button>
                </PopperContainer>
            </Popover>
        </FoodCardContainer>
    )
}