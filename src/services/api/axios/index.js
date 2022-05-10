import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = Cookies.get("auth-token");

        if(authToken) {
            config.headers.Authorization = `Bearer_${authToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;