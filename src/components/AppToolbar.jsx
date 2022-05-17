import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AppToolbar = () => {
    const auth = useAuth();

    const onLogOut = () => auth.logout();
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6'>
                    TrainingApp
                </Typography>
                <div>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                </div>
                {auth.isLoaded &&
                    (auth.isLoggedIn ? (
                        <>
                            <Button color="inherit" component={Link} to="/profile">
                                {auth?.user.firstName} {auth?.user.lastName}
                            </Button>
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
                    ))}
            </Toolbar>
        </AppBar>
    );
}

export default AppToolbar;