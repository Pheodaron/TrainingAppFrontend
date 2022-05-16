import { createEffect, createStore } from "effector";
// import allEndpoints from "../../services/api";

export const $user = createStore({
    firstName: null,
    lastName: null,
});

export const getUserFx = createEffect(async () => {
    // return await allEndpoints.auth.getProfile('');
});