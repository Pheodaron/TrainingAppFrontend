import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";
import { useStore } from "effector-react";
import { Link } from "react-router-dom";
import { $auth, logout } from "../models/auth";

const AppToolbar = () => {
    const auth = useStore($auth);

    const onLogOut = () => logout();
    if (auth.isLoading) return null;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">TrainingApp</Typography>
                <div>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                </div>
                {auth.isAuthorised ? (
                    <>
                        {/* <Button color="inherit" component={Link} to="/profile">
                                {auth?.user.firstName} {auth?.user.lastName}
                            </Button> */}
                        <Button color="inherit" onClick={onLogOut}>
                            Log out
                        </Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                        <Button color="inherit" component={Link} to="/registration">
                            Registration
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;
