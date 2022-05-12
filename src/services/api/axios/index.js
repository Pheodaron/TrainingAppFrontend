import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const axiosInstance = axios.create();

const axiosRefreshInstance = axios.create();

axiosRefreshInstance.interceptors.response.use(
    response => response,
    error => {
            Cookies.remove("authToken");
            Cookies.remove("user-data");
            return Promise.reject(error);
        // if(error.response.status === 403 || error.response.status === 401) {
        //     console.log("Error 403");
        //     Cookies.remove("authToken");
        //     Cookies.remove("user-data");
        // }
    }
)

const tokenUpdate = async (refreshToken) => {
    const data = await axiosRefreshInstance.post("http://localhost:8080/app/refresh-token", {"refreshToken": refreshToken});
    if (!data) {
        Cookies.set("auth-token", data.accessToken);
        Cookies.set("refreshToken", data.refreshToken);
        return data.accessToken;
    }
    console.log(data);
    // if(!data) {
    //     Cookies.set("auth-token", data.accessToken);
    //     Cookies.set("refreshToken", data.refreshToken);
    //     return data.accessToken;
    // }
}

const isExpired = (accessToken) => {
    const decodedToken = jwt_decode(accessToken);
    return new Date(decodedToken.exp * 1000) < new Date()
}


axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = Cookies.get("auth-token");
        
        if(authToken) {
            if(isExpired(authToken)) {
                const refreshToken = Cookies.get("refreshToken");
                console.log(refreshToken);
                authToken = tokenUpdate(refreshToken);
            }

            config.headers.Authorization = `Bearer_${authToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;