import Cookies from "js-cookie";
import { useState} from "react";

function useUserData(initialState) {
    const [user, setUser] = useState(initialState);

    const setUserData = (userData) => {
        if(userData) {
            setUser(userData);
            Cookies.set("user-data", JSON.stringify(userData));
        } else {
            setUser(null);
            Cookies.remove("user-data");
        }
    };

    return [user ,setUserData];
}

export default useUserData;