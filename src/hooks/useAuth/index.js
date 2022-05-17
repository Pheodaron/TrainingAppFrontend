import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

/**
 * @typedef { {
 *  isLoaded: boolean,
 *  isLoggedIn: boolean,
 *  token: undefined | null | string,
 *  user: Record<string, any>,
 *  login: ()=>void,
 *  logout: ()=>void
 * } } AuthType
 */

/**
 * @returns {AuthType} context
 */
function useAuth() {
    return useContext(AuthContext);
}

export default useAuth;