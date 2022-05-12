import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function useIsLoggedIn(token) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(Boolean(Cookies.get("auth-token")));
    }, [token]);

    return isLoggedIn;
}

export default useIsLoggedIn;