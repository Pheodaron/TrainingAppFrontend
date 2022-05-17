import { useEffect, useState } from "react";

function useIsLoggedIn(token) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const data = window.localStorage.getItem("authToken");
        setIsLoggedIn(Boolean(data));
    }, [token]);

    return [isLoggedIn, setIsLoggedIn];
}

export default useIsLoggedIn;