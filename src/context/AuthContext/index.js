import { createContext } from "react";

export const AuthContext = createContext({
    isLoaded: false,
    isLoggedIn: () => {},
    user: null,
    token: null,
    setIsLoaded: () => {},
    setUser: () => {},
    setTokenData: () => {},
    logOut: () => {},
});