import React from 'react'
import { FoodCardContainer } from './style'

export default function FoodCard(props) {
    return (
        <FoodCardContainer>
            <img src={props.image} alt={props.name} />
            <section>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div>
                    <b>R${props.price}</b>
                    <button onClick={props.addToCard}>adicionar</button>
                </div>
            </section>
        </FoodCardContainer>
    )
}