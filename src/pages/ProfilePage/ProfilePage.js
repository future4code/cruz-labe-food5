import React, {useState, useEffect} from 'react'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import EditIcon from '@material-ui/icons/Edit';
import { AddressDiv, ContainerProfile, ProfileDiv, Button } from './styled';

const ProfilePage =()=> {
    const [profile, setProfile] = useState({})
    const [address, setAddress] = useState({})
    const [orderHistory, setOrderHistory] = useState({})

    useEffect(() => {
        getProfile()
        getAddress()
        getOrderHistory()
    }, [])

const getProfile =()=> {
    axios.get(`${BASE_URL}profile`, {
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then((res)=>{
        setProfile(res.data.user)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const getAddress =()=> {
    axios.get(`${BASE_URL}profile/address`, {
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then((res)=>{
        setAddress(res.data.address)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const getOrderHistory =()=> {
    axios.get(`${BASE_URL}orders/history`, {
        headers: {
            Authorization: window.localStorage.getItem("token")
        }
    })
    .then((res)=>{
        setOrderHistory(res.data.order)
    })
    .catch((err)=>{
        console.log(err)
    })
}
    return (
        <ContainerProfile>
            <h1>Meu perfil</h1>
            <ProfileDiv>
                <div>
                <p>Joao</p>
                <p>joao@gmail.com</p>
                <p>111.111.111-50</p>
                {/* <p>{profile.name}</p>
                <p>{profile.email}</p>
                <p>{profile.cpf}</p> */}
                </div>
                <Button><EditIcon/></Button>
            </ProfileDiv>
            <AddressDiv>
                <div>
                <p>Rua Guaicurus, 89 - Centro</p>
                {/* <p>{address.street}, {address.number} - {address.neighbourhood}</p> */}
                </div>
                <Button><EditIcon/></Button>
            </AddressDiv>
            <h3>Histórico de pedidos</h3>
            {/* <p>{orderHistory}</p> */}
        </ContainerProfile>
    )
}

export default ProfilePage
