import { createContext } from "react";

export const AuthContext = createContext({
    isLoaded: false,
<<<<<<< HEAD
=======
    isLoggedIn: false,
    token: undefined,
>>>>>>> Piloswine1-authorization
    user: null,
    login: () => {},
    logOut: () => {}
});