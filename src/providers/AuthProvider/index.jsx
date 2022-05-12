import { useCallback, useEffect, useState, useMemo } from "react";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";
import api from "../../services/api";

function AuthProvider(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setTokenData] = useState(null);

    const setToken = useCallback((tokenData, refreshToken) => {
        if(tokenData) {
            Cookies.set("auth-token", tokenData);
            Cookies.set("refreshToken", refreshToken);
            setTokenData(tokenData);
        } else {
            console.log("remove token data - 1")
            setTokenData(null);
            Cookies.remove("auth-token");
            Cookies.remove("refreshToken");
        }
    }, []);

    const setUserData = useCallback((userData) => {
        if(userData) {
            setUser(userData);
            Cookies.set("user-data", JSON.stringify(userData));
        } else {
            setUser(null);
            Cookies.remove("user-data");
        }
    }, []);

    const logOut = useCallback(() => {
        setUserData(null);
        setToken(null);

    }, [setToken]);

    const loadData = useCallback(async () => {
        setIsLoaded(false);
        const tokenData = Cookies.get("auth-token");
        if (tokenData) {
            const userData = JSON.parse(Cookies.get("user-data"));
            // setUserData(userData);
            setUser(userData);
        } else {
            setTokenData(null);
            setUserData(null);
        }
        setIsLoaded(true);
        // setIsLoaded(false);
        // const tokenData = Cookies.get("auth-token");
        // if (tokenData) {
        //     const userData = JSON.parse(Cookies.get("user-data"));
        //     setUserData(userData);
        // } else {
        //     console.log(tokenData)
        //     console.log("setTokenDAta")
        //     setTokenData(null);
        // }

        // try {
        //     if (tokenData) {
        //         const { data } = await api.auth.getProfile(user.username);
        //         setUser(data);
        //     }
        // } catch { 
        //     setToken(null);
        // } finally {
        //     setIsLoaded(true);
        // }
    }, [setToken]);

    // useEffects----------------------------------------------------------

    useEffect(() => {
        loadData();
    }, [loadData]); //loadData

    // useEffect(() => {
    //     console.log(contextValue);
    // },[isLoaded])

    useEffect(() => {
        if(user) {
            Cookies.set("user-data", JSON.stringify(user));
        }
    }, [user]);

    const contextValue = useMemo(
        () => ({
            isLoaded,
            user,
            token,
            setIsLoaded,
            setUser,
            setToken,
            setUserData,
            logOut
        }),
        [isLoaded, user, token, setIsLoaded, setToken, logOut]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;