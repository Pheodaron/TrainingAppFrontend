import { CircularProgress } from "@mui/material";
import { useStore } from "effector-react";
import { $auth } from "models/auth";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    const auth = useStore($auth);
    
    if (auth.isLoading) return <CircularProgress/>;
    return (
        <>
            <Outlet />
        </>
    )
}

export default AppLayout;