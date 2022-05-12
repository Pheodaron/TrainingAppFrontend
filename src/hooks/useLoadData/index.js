import Cookies from "js-cookie";
import { useEffect } from "react";

function useLoadData(setIsLoaded, setTokenData, setUserData) {
    const loadData = () => {
        setIsLoaded(false);
        const tokenData = Cookies.get("auth-token");
        if (tokenData) {
            const userData = JSON.parse(Cookies.get("user-data"));
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