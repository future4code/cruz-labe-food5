import React, { useState, useContext } from 'react'
import { FoodCardContainer, PopperContainer } from './style'
import Popover from '@material-ui/core/Popover'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import {quantityArray}from '../../constants/quantityArray'
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
                    <h4>Selecione a quantidade desejada</h4>
                    <Select
                    value={props.quantity}
                    name={props.inputName}
                    onChange={props.handleChange}
                    label={'Quantidade'}
                    >
                        <MenuItem value={0} selected disabled>{0}</MenuItem>
                        {quantityArray.map((number)=>{
                            return <MenuItem value={number}>{number}</MenuItem>
                        })}
                    </Select>
                    {/* <TextField 
                    type="number"
                    required
                    min={1}
                    name={props.inputName}
                    onChange={props.handleChange}
                    value={props.quantity}
                    /> */}
                    <button onClick={props.addToCart}>Adicionar</button>
                </PopperContainer>
            </Popover>
        </FoodCardContainer>
    )
}