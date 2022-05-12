import { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";
import api from "../../services/api";

function AuthProvider(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setTokenData] = useState(null);

    const setToken = (tokenData, refreshToken) => {
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
    };

    const setUserData = (userData) => {
        if(userData) {
            setUser(userData);
            Cookies.set("user-data", JSON.stringify(userData));
        } else {
            setUser(null);
            Cookies.remove("user-data");
        }
    };

    const logOut = () => {
        setUserData(null);
        setToken(null);
    };

    const loadData = async () => {
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
    };

    useEffect(() => {
        loadData();
    }, [loadData]); //loadData

    useEffect(() => {
        if(user) {
            Cookies.set("user-data", JSON.stringify(user));
        }
    }, [user]);

    const contextValue = 
        {
            isLoaded,
            user,
            token,
            setIsLoaded,
            setUser,
            setToken,
            setUserData,
            logOut
        };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;