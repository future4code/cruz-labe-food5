import React, { useState, useContext, useEffect } from 'react'
import { FoodCardContainer, PopperContainer } from './style'
import Popover from '@material-ui/core/Popover'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import {useForm} from '../../hooks/useForm'
import MenuItem from '@material-ui/core/MenuItem'
import {quantityArray}from '../../constants/quantityArray'
import GlobalStateContext from '../../global/GlobalStateContext'

export default function FoodCard(props) {
    const {cart, setCart, restaurantIdForCart, setRestaurantIdForCart, restaurantShipping, setRestaurantShipping, chosenRestaurant, setChosenRestaurant} = useContext(GlobalStateContext)
    const [form, setForm, handleForm, resetForm] = useForm({ quantity: 1 })
    const [openPopper, setOpenPopper] = useState(false)

    const addToCart = (product, restaurant) => {
        let productWithQuantity = { ...product, quantity: form.quantity }
        let newCart = [...cart]
        newCart.push(productWithQuantity)
        alert(`${product.name} adicionado ao carrinho.`)
        setCart(newCart)
        setForm({ ...form, quantity: 0 })
        setOpenPopper(false)
        setChosenRestaurant(restaurant)
    }

    const removeFromCart = (product) =>{
        let newCart = cart.filter((item)=>{
            return item.id !== product.id
        })
        alert(`${product.name} removido do carrinho.`)
        setCart(newCart)
    }

    const addOrRemove = (product) =>{
        let i = 0
        cart.forEach((item)=>{
            if(item.id===product.id){
                i+=1
            }
        })
        if(i===0){
            setOpenPopper(true)
        } else{
            removeFromCart(product)
        }
    }

    const buttonText = (product) =>{
        let i = 0
        cart.forEach((item)=>{
            if(item.id===product.id){
                i+=1
            }
        })
        if(i===0){
            return 'Adicionar'
        } else{
            return 'Remover'
        }
    }

    return (
        <FoodCardContainer
        color={buttonText(props.product)==='Adicionar' ? '#e02020' : 'white'}
        background={buttonText(props.product)==='Adicionar' ? 'none' : '#e8222e'}
        activeColor={buttonText(props.product)==='Adicionar' ? 'white' : '#e02020'}
        activeBackground={buttonText(props.product)==='Adicionar' ? '#e8222e' : 'none'}
        >
            <img src={props.image} alt={props.name} />
            <section>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div>
                    <b>R${props.price}</b>
                    <button onClick={()=>addOrRemove(props.product)}>{buttonText(props.product)}</button>
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
                    value={form.quantity}
                    name={'quantity'}
                    onChange={handleForm}
                    label={'Quantidade'}
                    >
                        {quantityArray.map((number)=>{
                            return <MenuItem value={number}>{number}</MenuItem>
                        })}
                    </Select>
                    <button onClick={()=>addToCart(props.product, props.restaurant)}>Adicionar</button>
                </PopperContainer>
            </Popover>
        </FoodCardContainer>
    )
}