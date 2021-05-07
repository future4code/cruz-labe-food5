import styled from 'styled-components'

export const ContainerHome = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
export const CardContainer = styled.div`
  width: 22.5rem;
  height: 12.25rem;
  margin: 3.125rem 0 0;
  padding: 0.5rem 1rem 0;
  `

export const FoodImg = styled.img`
 width: 20.5rem;
  height: 7.5rem;
  margin: 0 0 0.75rem;
  object-fit: cover;`

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .div1 { grid-area: 1 / 1 / 3 / 2; }
  .div2 { grid-area: 2 / 2 / 3 / 3; }
`
export const SearchForm = styled.form`
width: 40%;
height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding-bottom: 1em;
`