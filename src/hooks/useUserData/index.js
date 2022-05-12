import { useState} from "react";

function useUserData(initialState) {
    const [user, setUser] = useState(initialState);

    const setUserData = (userData) => {
        if(userData) {
            setUser(userData);
            window.localStorage.setItem("userData", JSON.stringify(userData));
        } else {
            setUser(null);
            window.localStorage.removeItem("userData");
        }
    };

    return [user ,setUserData];
}

export default useUserData;