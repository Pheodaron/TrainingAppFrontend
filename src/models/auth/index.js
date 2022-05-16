import { createStore, createEffect, createEvent } from "effector";
import { STORAGE_KEY } from "./constants";

export const $auth = createStore({
    isLoading: true,
    isAuthorised: false,
    token: null,
});

export const $token = $auth.map(state => state.token);

export const loadStorageFx = createEffect(async () => {
    const token = window.localStorage.getItem(STORAGE_KEY);

    if (token)
        return JSON.parse(window.atob(token))?.accessToken ?? null;

    return null;
});

export const setToken = createEvent();
export const login = createEvent();
export const logout = createEvent();