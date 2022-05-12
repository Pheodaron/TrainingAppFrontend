import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import useUserData from "../../hooks/useUserData";
import useTokenData from "../../hooks/useTokenData";
import useLoadData from "../../hooks/useLoadData";

function AuthProvider(props) {
    const [isLoaded, setIsLoaded] = useState(true);
    const [user, setUserData] = useUserData(null);
    const [token, setTokenData] = useTokenData(null);

    const logOut = () => {
        setUserData(null);
        setTokenData(null);
    };

    useLoadData(setIsLoaded, setTokenData, setUserData);

    const contextValue = 
        {
            isLoaded,
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