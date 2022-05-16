import axiosInstance from "../axios";

const authEndpoints = {
    registration: (data) => axiosInstance.post("/app/register", data),
    login: (data) => axiosInstance.post("/app/login", data),
    forgotPassword: (data) => axiosInstance.post("/forgot/password", data),
    getProfile: (username) => axiosInstance.get(`/user/get/${username}`),
    refreshToken: (data) => axiosInstance.post("/app/refresh-token", data),
    test: () => axiosInstance.get("/app/test/get"),
};

export default authEndpoints;