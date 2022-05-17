import { useState } from "react";
function useTokenData(initialState) {
    const [token, setToken] = useState(initialState);

    const setTokenData = (tokenData, refreshToken) => {
        if(tokenData) {
            window.localStorage.setItem("authToken", JSON.stringify(
                { 
                    "accessToken": tokenData, 
                    "refreshToken": refreshToken
                }));
                
            setToken(tokenData);
        } else {
            window.localStorage.removeItem("authToken");
            setToken(null);
        }
    };

    return [token, setTokenData];
}

export default useTokenData;