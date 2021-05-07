import React, { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import {
  AddressDiv,
  ContainerProfile,
  ProfileDiv,
  Button,
  HistoryContainer,
  AddressTitle,
  Header,
  DivTitle,
  DivInfoAddress,
  DivButton,
} from "./styled";
import {
  goToEditAddressPage,
  goToEditProfilePage,
} from "../../routes/coordinator";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext"


const ProfilePage = () => {
  const {setFullAddress, fullAddress} = useContext(GlobalStateContext)

  const history = useHistory();
  const [profile, setProfile] = useState({});
  const [orderHistory, setOrderHistory] = useState({});

  useEffect(() => {
    setFullAddress(fullAddress)
    getProfile();
    getOrderHistory();
  }, []);

  const getProfile = () => {
    axios
      .get(`${BASE_URL}profile`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrderHistory = () => {
    axios
      .get(`${BASE_URL}orders/history`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOrderHistory(res.data.order);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return (
        <ContainerProfile>
            <ProfileDiv>
                <div>
                    <p>{profile.name}</p>
                    <p>{profile.email}</p>
                    <p>{profile.cpf}</p>
                </div>
                <Button onClick={() => goToEditProfilePage(history)}><EditOutlinedIcon /></Button>
            </ProfileDiv>

         <AddressDiv>
                <DivButton>
                    <div>
                        <AddressTitle>Endereço cadastrado</AddressTitle>
                        {profile.address}
                    </div>  
                    <Button onClick={() => goToEditAddressPage(history)}><EditOutlinedIcon /></Button>
                </DivButton>
        </AddressDiv> 

            <HistoryContainer>
                <DivTitle>
                    <p>Histórico de pedidos</p>
                </DivTitle>
               {/* {orderHistory ? orderHistory : <p>Você não realizou nenhum pedido</p>} */}
            </HistoryContainer>
        </ContainerProfile>
    )
}


export default ProfilePage;
