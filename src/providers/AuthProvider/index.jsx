import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import useUserData from "../../hooks/useUserData";
import useTokenData from "../../hooks/useTokenData";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import useLoadData from "../../hooks/useLoadData";

function AuthProvider(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUserData] = useUserData(null);
    const [token, setTokenData] = useTokenData(null);
    const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn(token);

    useLoadData(setIsLoaded, setTokenData, setUserData);

    const logOut = () => {
        setUserData(null);
        setTokenData(null);
        setIsLoggedIn(false);
    };

    const contextValue = 
        {
            isLoaded,
            isLoggedIn,
            user,
            token,
            setIsLoaded,
            setTokenData,
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