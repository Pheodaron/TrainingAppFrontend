import { useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import jwtDecode from "jwt-decode";
import { isUndefined } from "lodash";

const STORAGE_KEY = "TOKEN_STORAGE";

function AuthProvider(props) {
    const [token, setToken] = useState(undefined);

    const saveToken = token => {
        window.localStorage.setItem(
            STORAGE_KEY,
            window.atob(JSON.stringify(token))
        );
        setToken(token.accessToken);
    };

    useEffect(() => {
        window.onstorage = event => {
            if (event.key === STORAGE_KEY)
                saveToken(JSON.parse(event.newValue));
        };

        return () => {
            window.onstorage = null;
        };
    }, []);

    useEffect(() => {
        const tokenAsB64 = window.localStorage.getItem(STORAGE_KEY);
        if (tokenAsB64) {
            const parsed = window.btoa(tokenAsB64);
            setToken(parsed?.accessToken);
        } else {
            setToken(null);
        }
    }, []);

    const isLoaded = !isUndefined(token);
    const isLoggedIn = !!token;
    const user = token ? jwtDecode(token) : null;
    const login = token => saveToken(token);
    const logout = () => {
        window.localStorage.removeItem(STORAGE_KEY);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{
            isLoaded,
            token,
            user,
            isLoggedIn,
            login,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;