import { createStore, createEffect, createEvent } from "effector";
import { STORAGE_KEY } from "./constants";

type AuthState = {
    isLoading: boolean,
    isAuthorised: boolean,
    token?: string | null,
}

export const $auth = createStore<AuthState>({
    isLoading: true,
    isAuthorised: false
});

export const loadStorageFx = createEffect(async () => {
    const token = window.localStorage.getItem(STORAGE_KEY);
    return token ?
        JSON.parse(window.atob(token))?.accessToken as AuthState['token'] ?? null :
        null;
});

export const setToken = createEvent<string>();