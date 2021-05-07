import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";
import { BASE_URL } from '../constants/urls'

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [fullAddress, setFullAddress] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}profile/address`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setFullAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fullAddress]);

  const data = {
    cart,
    setCart,
    fullAddress,
    setFullAddress
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
