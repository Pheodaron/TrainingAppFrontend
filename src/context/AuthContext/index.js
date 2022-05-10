import { createContext } from "react";

export const AuthContext = createContext({
    isLoaded: false,
    isLogin: false,
    user: null,
    token: null,
    setIsLoaded: () => {},
    setIsLogin: () => {},
    setUser: () => {},
    setToken: () => {},
    logOut: () => {},
});