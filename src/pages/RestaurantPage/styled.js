import styled from 'styled-components';

export const MainContainer = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const RestaurantInfoContainer = styled.section`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
img{
    width: 60%;
    margin: 1.063rem 1rem 0.75rem;
    border-radius: 8px;
    background-color: #d8d8d8;
}
h2{
    width: 100%;
    text-align: left;
    font-family: 'Roboto';
    font-size: 1.5rem;
    letter-spacing: -0.39px;
    color: #e8222e;
    margin-bottom: 1em;
}
p{
    width: 100%;
    margin-bottom: 0.5em;
    text-align: left;
    font-family: 'Roboto';
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #b8b8b8;
}
`

export const PopperContainer = styled.div`
width: 10em;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
`

export const CategoryName = styled.h3`
width: 90%;
font-family: 'Roboto';
letter-spacing: -0.39px;
border-bottom:1px solid black;
`