import { Home } from "../pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Registration } from "../pages/Registration";
import { Login } from "../pages/Login";
import Profile from "../pages/Profile";
import { NotFound } from "../pages/NotFound";
import AppLayout from "../components/AppLayout";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/registration"
                element={<Registration />}
            />
            <Route element={<AppLayout />}>
                <Route path="/profile" element={<Profile />}/>
            </Route>
            <Route path="/not-found-404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found-404" />} />
        </Routes>
    );
}

export default AppRoutes;