import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToHomePage, goBack } from "../routes/coordinator"

export const login = (body, resetForm, history) => {

    axios
        .post(`${BASE_URL}login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            resetForm();
            goToHomePage(history);
    })
    .catch((error) => {
        alert(error.response.data.message);
    });
};
export const signUp = (body, resetForm, history) => {
    axios
        .post(`${BASE_URL}signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            resetForm();
            goToHomePage(history);
    })
    .catch((error) => {
        alert(error.response.data.message);
    });
};
export const getAddress = (setAddress) => {
    axios
    .get(`${BASE_URL}` / "profile/address", {
        headers: {
            auth: localStorage.getItem("token"),
        },
    })
    .then((response) => {
        setAddress(response.data.address);
    })
    .catch((error) => {
        console.log(error.message);
    });
};
export const address = (body, history) => {
    axios
    .put(`${BASE_URL}` / "address", body, {
        headers: {
            auth: localStorage.getItem("token"),
        },
    })
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        goBack(history);
    })
    .catch((error) => {
        alert("Por favor, confirme as informações inseridas.");
        console.log(error.message);
    });
};
export const placeOrder = (body, id, history) => {
    axios
    .post(`${BASE_URL}/restaurants/${id}/order`, body, {
        headers: {
            auth: localStorage.getItem("token"),
        },
    })
    .then((response) => {
        goToHomePage(history);
    })
    .catch((error) => {
        const errorArray = error.message.split(" ");
        if (errorArray[errorArray.length - 1] === "409") {
        alert("Você já tem um pedido em andamento!");
        }
        console.log(error.message);
    });
};
