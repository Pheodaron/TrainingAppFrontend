import axiosInstance from "../../services/api/axios";
import { STORAGE_KEY } from "./constants";
import { $auth, loadStorageFx, login, logout, setToken } from "./index";

$auth.on([loadStorageFx.doneData, setToken], (state, token) => {
    state.token = token;
    state.isLoading = false;
    if (token) {
        state.isAuthorised = true;
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer_${token.accessToken}`;
    }
    return state;
});

$auth.on(login, (state, newToken) => {
    window.localStorage.setItem(STORAGE_KEY, window.btoa(JSON.stringify(newToken)));
    setToken(newToken);
    return state;
});

$auth.on(logout, state => {
    state.isAuthorised = false;
    state.token = null;
    window.localStorage.removeItem(STORAGE_KEY);
    return state;
});

loadStorageFx();