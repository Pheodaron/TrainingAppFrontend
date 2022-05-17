import { createEffect, createStore } from "effector";

type UserState = {
    firstName?: string,
    lastName?: string,
}

export const $user = createStore<UserState>({});

export const getUserFx = createEffect();