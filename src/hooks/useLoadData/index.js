import { useEffect } from "react";

function useLoadData(setIsLoaded, setTokenData, setUserData) {
    const loadData = () => {
        setIsLoaded(false);
        const tokenData = window.localStorage.getItem("authToken");
        if(tokenData) {
            const { accessToken, refreshToken } = JSON.parse(tokenData);
            const userData = JSON.parse(window.localStorage.getItem("userData"));
            setTokenData(accessToken, refreshToken);
            setUserData(userData);
        } else {
            setTokenData(null);
            setUserData(null);
        }
        setIsLoaded(true);
    };
    
    useEffect(() => {
        loadData();
    }, []);
}

export default useLoadData;