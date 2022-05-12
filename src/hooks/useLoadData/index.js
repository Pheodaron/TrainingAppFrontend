import { useEffect } from "react";

function useLoadData(setIsLoaded, setTokenData, setUserData) {
    const loadData = () => {
        setIsLoaded(false);
        const data = window.localStorage.getItem("authToken");
        if(data) {
            const userData = JSON.parse(window.localStorage.getItem("userData"));
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