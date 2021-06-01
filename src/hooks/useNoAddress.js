/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToEditAddressPage } from "../routes/coordinator";
import { BASE_URL } from "../constants/urls";

export const useNoAddress = () => {
  const token = window.localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    getProfileInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProfileInfo = async () => {
    try {
      let profileInfo = await axios.get(`${BASE_URL}profile`, {
        headers: {
          auth: token,
        },
      });
      if (!profileInfo.data.user.hasAddress) {
        goToEditAddressPage(history);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
};
