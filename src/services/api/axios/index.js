import axios from "axios";
import jwt_decode from "jwt-decode";

const axiosInstance = axios.create();

const axiosRefreshInstance = axios.create();

axiosRefreshInstance.interceptors.response.use(
    response => response,
    error => {
            window.localStorage.removeItem('authToken');
            window.localStorage.removeItem('userData');
            return Promise.reject(error);
    }
)

const tokenUpdate = async (refreshToken) => {
    const data = await axiosRefreshInstance.post("http://localhost:8080/app/refresh-token", {"refreshToken": refreshToken});
    if (!data) {
        window.localStorage.setItem("authToken", JSON.stringify({
            "accessToken": data.accessToken,
            "refreshToken": data.refreshToken,
        }));
        return data.accessToken;
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