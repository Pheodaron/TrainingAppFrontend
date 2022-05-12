import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  Container,
  Button,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import jwtDecode from "jwt-decode";

export function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
      } = useForm({
        resolver: yupResolver(validationSchema),
      });

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const { data: loginData } = await api.auth.login(data);
            auth.setToken(loginData.accessToken, loginData.refreshToken);

            const decodedToken = jwtDecode(loginData.accessToken);
            const { data: userData } = await api.auth.getProfile(decodedToken.sub);

            auth.setUserData(userData);
            // Cookies.set("user-data", JSON.stringify(userData));
            // auth.setUser(userData);
        } catch (e) {
        if (e.response.status === 422) {
            Object.keys(e.response.data.errors).forEach((key) => {
            setError(key, {
                type: "manual",
                message: e.response.data.errors[key],
            });
            });
        }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6">Login</Typography>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name="username"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={Boolean(errors.username?.message)}
                      fullWidth={true}
                      type="username"
                      label="Username"
                      variant="filled"
                      helperText={errors.username?.message}
                    />
                  )}
                />
              </Grid>
    
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={Boolean(errors.password?.message)}
                      type="password"
                      fullWidth={true}
                      label="Password"
                      variant="filled"
                      helperText={errors.password?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isLoading}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  type="submit"
                  component={Link}
                  to="/registration"
                >
                  Create an account
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      );
}