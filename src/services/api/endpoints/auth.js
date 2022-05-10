import axios from "../axios";

const endpoints = {
    registration: (data) => axios.post("http://localhost:8080/app/register", data),
    login: (data) => axios.post("http://localhost:8080/app/login", data),
    forgotPassword: (data) => axios.post("/forgot/password", data),
    getProfile: (username) => axios.get(`http://localhost:8080/user/get/${username}`),
};

export default endpoints;