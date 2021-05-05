import React, {useState, useEffect} from 'react'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import EditIcon from '@material-ui/icons/Edit';
import { AddressDiv, ContainerProfile, ProfileDiv, Button } from './styled';
import { goToEditAddressPage, goToEditProfilePage } from '../../routes/coordinator';
import { useHistory } from 'react-router';

const ProfilePage =()=> {
    const history = useHistory()
    const [profile, setProfile] = useState({})
    // const [address, setAddress] = useState({})
    // eslint-disable-next-line no-unused-vars
    // const [orderHistory, setOrderHistory] = useState({})

    useEffect(() => {
        getProfile()
        // getFullAddress()
        // getOrderHistory()
    }, [])

const getProfile =()=> {
    axios.get(`${BASE_URL}profile`, {
        headers: {
            auth: window.localStorage.getItem("token")
        }
    })
    .then((res)=>{
        setProfile(res.data.user)
    })
    .catch((err)=>{
        console.log(err)
    })
}

// const getFullAddress =()=> {
//     axios.get(`${BASE_URL}profile/address`, {
//         headers: {
//             auth: window.localStorage.getItem("token")
//         }
//     })
//     .then((res)=>{
//         // setAddress(res.data.user.adress)
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err.response.data.message)
//     })
// }

// const getOrderHistory =()=> {
//     axios.get(`${BASE_URL}orders/history`, {
//         headers: {
//             auth: window.localStorage.getItem("token")
//         }
//     })
//     .then((res)=>{
//         setOrderHistory(res.data.order)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }
    return (
        <ContainerProfile>
            <h1>Meu perfil</h1>
            <ProfileDiv>
                <div>
                <p>{profile.name}</p>
                <p>{profile.email}</p>
                <p>{profile.cpf}</p>
                </div>
                <Button onClick={() => goToEditProfilePage(history)}><EditIcon/></Button>
            </ProfileDiv>
            <AddressDiv>
                <div>
                {profile.address}
                </div>
                <Button onClick={() => goToEditAddressPage(history)}><EditIcon/></Button>
            </AddressDiv>
            <h3>Histórico de pedidos</h3>
        </ContainerProfile>
    )
}

export default ProfilePage
