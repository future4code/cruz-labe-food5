import styled from 'styled-components'

export const FoodCardContainer = styled.div`
  width: 90%;
  height: 7rem;
  margin: 0.438rem 0;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
  section{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      position: relative;
      div{
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        /* justify-content: space-between; */
      }
      button{
        width: 5rem;
        height: 2rem;
        position: absolute;
        right: 0;
        /* margin: 0.438rem 0 0; */
        margin-left: 0;
        border-radius: 8px 0;
        color: ${props=>props.color};
        /* color: #e02020; */
        border-top: solid 1px #b8b8b8;
        border-left: solid 1px #b8b8b8;
        border-bottom: none;
        border-right: none;
        background:${props=>props.background};
        /* background: none; */
        :active, :hover{
          color: ${props=>props.activeColor};
          background: ${props=>props.activeBackground}
            /* color: white;
            background: #e8222e; */
        }
      }
  }
  h3{
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
    margin-bottom: 10px;
  }
  img{
    width: 6rem;
    height: 7rem;
    margin: 0 1rem 0 0;
    border-radius: 8px;
    background-color: #d8d8d8;
  }
  p{
    font-family: 'Roboto';
    font-size: 0.75rem;
    /* font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal; */
    letter-spacing: -0.29px;
    color: #b8b8b8;
    margin: 0;
  }
  b{
    font-family: 'Roboto';
    font-size: 1rem;
    /* font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal; */
    letter-spacing: -0.39px;
    color: var(--black);
  }
`

// export const addOrRemoveButton = styled.button`
// width: 5rem;
// height: 2rem;
// position: absolute;
// right: 0;
// margin-left: 0;
// border-radius: 8px 0;
// color: #e02020;
// border-top: solid 1px #b8b8b8;
// border-left: solid 1px #b8b8b8;
// border-bottom: none;
// border-right: none;
// background: none;
// :active, :hover{
//     color: white;
//     background: #e8222e;
// }
// `

export const PopperContainer = styled.div`
width: 18em;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
h4{
  font-family: 'Roboto';
  font-size: 1rem;
  letter-spacing: -0.39px;
  text-align: center;
}
button{
  margin-top: 1em;
  background: none;
  border:none;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-size: 1rem;
  letter-spacing: -0.39px;
  color: #4f81a8;
}
Select{
  width: 15em;
}
`