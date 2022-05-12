import { useState } from "react";
import Cookies from "js-cookie";

function useTokenData(initialState) {
    const [token, setToken] = useState(initialState);

    const setTokenData = (tokenData, refreshToken) => {
        if(tokenData) {
            Cookies.set("auth-token", tokenData);
            Cookies.set("refreshToken", refreshToken);
            setToken(tokenData);
        } else {
            Cookies.remove("auth-token");
            Cookies.remove("refreshToken");
            setToken(null);
        }
    };

    return [token, setTokenData];
}

export default useTokenData;