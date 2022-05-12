import { useEffect, useState } from "react";

function useIsLoggedIn(token, user) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(Boolean(JSON.parse(window.localStorage.getItem("authToken"))));
    }, [token]);

    return [isLoggedIn, setIsLoggedIn];
}

export default useIsLoggedIn;