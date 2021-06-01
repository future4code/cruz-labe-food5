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
  DivTitle,
  Name,
  DivButton,
  CardOrder,
  Date,
} from "./styled";
import {
  goToEditAddressPage,
  goToEditProfilePage,
} from "../../routes/coordinator";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import { formatDate } from "../../services/utilitiesDate";

const ProfilePage = () => {
  const { setFullAddress, fullAddress } = useContext(GlobalStateContext);

  const history = useHistory();
  const [profile, setProfile] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    setFullAddress(fullAddress);
    getProfile();
    getOrderHistory();
  }, [fullAddress, setFullAddress]);

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
        setOrderHistory(res.data.orders);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const orderList = orderHistory.map((order) => {
    return (
      <CardOrder>
        <Name>{order.restaurantName}</Name>
        <Date>{formatDate(order.expiresAt)}</Date>
        <p>Subtotal: R${order.totalPrice}</p>
      </CardOrder>
    );
  });

  return (
    <ContainerProfile>
      <ProfileDiv>
        <div>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <p>{profile.cpf}</p>
        </div>
        <Button onClick={() => goToEditProfilePage(history)}>
          <EditOutlinedIcon />
        </Button>
      </ProfileDiv>

      <AddressDiv>
        <DivButton>
          <div>
            <AddressTitle>Endereço cadastrado</AddressTitle>
            {profile.address}
          </div>
          <Button onClick={() => goToEditAddressPage(history)}>
            <EditOutlinedIcon />
          </Button>
        </DivButton>
      </AddressDiv>

      <HistoryContainer>
        <DivTitle>
          <p>Histórico de pedidos</p>
        </DivTitle>
        {orderList}
      </HistoryContainer>
    </ContainerProfile>
  );
};

export default ProfilePage;
