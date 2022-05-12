import {
    CircularProgress,
    Container,
    Grid,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { Home } from "../../pages/Home";
import { Routes, Route, Navigate, useRouterH } from "react-router-dom";
import { useEffect } from "react";
import GuestRoute from "../components/GuestRoute";
import { PrivateRoute } from "../components/PrivateRoute";
import { Registration } from "../../pages/Registration";
import { Login } from "../../pages/Login";
import Profile from "../../pages/Profile";
import { NotFound } from "../../pages/NotFound";

function AppRoutes() {
    const auth = useAuth();

    return auth.isLoaded ? (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                }
            />
            <Route
                path="/login"
                element={
                    <GuestRoute>
                        <Login />
                    </GuestRoute>
                }
            />
            <Route
                path="/registration"
                element={
                    <GuestRoute>
                        <Registration />
                    </GuestRoute>
                }
            />
            <Route path="/not-found-404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found-404" />} />
        </Routes>
    ) : (
        <Container maxWidth="md">
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item>
                    <CircularProgress color="inherit" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default AppRoutes;