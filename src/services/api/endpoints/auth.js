import axios from "../axios";

const endpoints = {
    registration: (data) => axios.post("http://localhost:8080/app/register", data),
    login: (data) => axios.post("http://localhost:8080/app/login", data),
    forgotPassword: (data) => axios.post("/forgot/password", data),
    getProfile: (username) => axios.get(`http://localhost:8080/user/get/${username}`),
    refreshToken: (data) => axios.post("http://localhost:8080/app/refresh-token", data),
    test: () => axios.get("http://localhost:8080/app/test/get"),
};

export default endpoints;