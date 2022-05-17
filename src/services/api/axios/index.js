import axios from "axios";
import allEndpoints from "..";
import { $token, logout, setToken } from "../../../models/auth";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_MAIN_API,
});

axiosInstance.interceptors.response.use(response => response, error => {
    if (
        !axiosInstance.defaults.headers.common['Authorization']
        && error.response.status !== 401
    ) return Promise.reject(error);

    const accessToken = $token.getState()?.accessToken;

    if (accessToken)
        allEndpoints.auth
            .refreshToken()
                .then(({data}) => setToken(data))
                .catch(err => {
                    console.log(err);
                    logout();
                });
})

export default axiosInstance;