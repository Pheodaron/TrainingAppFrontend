import { Navigate, Outlet } from "../../node_modules/react-router-dom/index";
import useAuth from "../hooks/useAuth/index";

const AppLayout = () => {
    const auth = useAuth();

    if (!auth?.user) return <Navigate to='/login'/>;
    return (
        <>
            <Outlet />
        </>
    )
}

export default AppLayout;