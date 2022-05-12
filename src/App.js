import './App.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Routes from "./routes/Routes";

function App() {
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logOut();
    navigate("/login");
  };

  return (
    <div>
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
            (auth.user ? (
              <>
                <Button color="inherit" component={Link} to="/profile">
                  {auth.user.firstName} {auth.user.lastName}
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

      <Routes />
    </div>
  );
}

export default App;
