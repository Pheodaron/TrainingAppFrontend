import { createContext } from "react";

export const AuthContext = createContext({
    isLoaded: false,
    isLoggedIn: false,
    token: undefined,
    user: null,
    login: () => {},
    logOut: () => {}
});