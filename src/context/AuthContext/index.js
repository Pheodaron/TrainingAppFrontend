import { createContext } from "react";

export const AuthContext = createContext({
    isLoaded: false,
    isLoggedIn: false,
    user: null,
    token: null,
    setIsLoaded: () => {},
    setUser: () => {},
    setTokenData: () => {},
    logOut: () => {},
});