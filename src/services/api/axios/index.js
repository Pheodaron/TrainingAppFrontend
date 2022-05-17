import axios from "axios";
import jwt_decode from "jwt-decode";

const axiosInstance = axios.create();

export const axiosRefreshInstance = axios.create();

const tokenUpdate = async (refreshToken) => {
    const { data } = await axiosRefreshInstance.post("http://localhost:8080/app/refresh-token", {"refreshToken": refreshToken});
    if (data) {
        const { accessToken, refreshToken } = data;
        console.log("refreshed token...");
        console.log(data);
        console.log(accessToken);
        console.log(refreshToken);
        window.localStorage.setItem("authToken", JSON.stringify(
            { 
                "accessToken": accessToken, 
                "refreshToken": refreshToken
            }));
        return accessToken;
    }
    console.log(data);
}

const isExpired = (accessToken) => {
    const decodedToken = jwt_decode(accessToken);
    return new Date(decodedToken.exp * 1000) < new Date()
}


axiosInstance.interceptors.request.use(
    (config) => {
        const data = window.localStorage.getItem("authToken");
        if(data) {
            let { accessToken, refreshToken } = JSON.parse(data);
            if(accessToken) {
                if(isExpired(accessToken)) {
                    accessToken = tokenUpdate(refreshToken);
                }
                config.headers.Authorization = `Bearer_${accessToken}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;