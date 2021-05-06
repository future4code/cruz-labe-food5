import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { AddressDiv, ContainerProfile, ProfileDiv, Button, HistoryContainer, AddressTitle, Header, DivTitle, DivInfoAddress, DivButton } from './styled';
import { goToEditAddressPage, goToEditProfilePage } from '../../routes/coordinator';
import { useHistory } from 'react-router';


const ProfilePage = () => {
    const history = useHistory()
    const [profile, setProfile] = useState({})
    const [orderHistory, setOrderHistory] = useState({})

    useEffect(() => {
        getProfile()
        getOrderHistory()
    }, [])

    const getProfile = () => {
        axios.get(`${BASE_URL}profile`, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                setProfile(res.data.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getOrderHistory = () => {
        axios.get(`${BASE_URL}orders/history`, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                setOrderHistory(res.data.order)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <ContainerProfile>
            <Header>
                <p>Meu perfil</p>
            </Header>
            <ProfileDiv>
                <div>
                    <p>{profile.name}</p>
                    <p>{profile.email}</p>
                    <p>{profile.cpf}</p>
                </div>
                <Button onClick={() => goToEditProfilePage(history)}><EditOutlinedIcon /></Button>
            </ProfileDiv>

         <AddressDiv>
                    <div>
                        <AddressTitle>Endereço cadastrado</AddressTitle>
                        {profile.address}
                    </div>  
                    <Button onClick={() => goToEditAddressPage(history)}><EditOutlinedIcon /></Button>
        </AddressDiv> 



            <HistoryContainer>
                <DivTitle>
                    <p>Histórico de pedidos</p>
                </DivTitle>
                {profile.orderHistory}
            </HistoryContainer>
        </ContainerProfile>
    )
}

export default ProfilePage
