import { useCallback, useEffect, useState, useMemo } from "react";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

function AuthProvider(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setTokenData] = useState(null);

    const setToken = useCallback((tokenData) => {
        setTokenData(tokenData);

        if(tokenData) {
            Cookies.set("auth-token", tokenData);
        }
    }, []);

    const logOut = useCallback(() => {
        setUser(null);
        setToken(null);
        setIsLogin(null);
        Cookies.remove("auth-token");
        Cookies.remove("user-data");
        Cookies.remove("refreshToken");
    }, [setToken]);

    const loadData = useCallback(async () => {
        const tokenData = Cookies.get("auth-token");
        const stringUserData = Cookies.get("user-data");
        if(stringUserData) {
            const userData = JSON.parse(Cookies.get("user-data"));
            setUser(userData);
        }
        setTokenData(tokenData);

        try {
            if (tokenData) {
                const { data } = await api.auth.getProfile(user.username);
                setUser(data);
            }
        } catch { 
            setToken(null);
        } finally {
            setIsLoaded(true);
        }
    }, [setToken, isLogin]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    useEffect(() => {
        console.log(contextValue);
    },[isLoaded])

    useEffect(() => {
        if(user) {
            Cookies.set("user-data", JSON.stringify(user));
        }
    }, [user]);

    const contextValue = useMemo(
        () => ({
            isLoaded,
            isLogin,
            user,
            token,
            setIsLoaded,
            setIsLogin,
            setUser,
            setToken,
            logOut
        }),
        [isLoaded, isLogin, user, token, setIsLoaded, setIsLogin, setToken, logOut]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;