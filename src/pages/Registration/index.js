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
import {
  Link,
  // useNavigate
} from "react-router-dom";

export function Registration() {
    // const navigate = useNavigate();
  
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(validationSchema),
    });
  
    const onSubmit = async (data) => {
      // TODO: register
    };
  
    return (
      <Container maxWidth="xs">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">Create new account</Typography>
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
                    label="Username"
                    variant="filled"
                    helperText={errors.username?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.firstName?.message)}
                    fullWidth={true}
                    label="First name"
                    variant="filled"
                    helperText={errors.firstName?.message}
                  />
                )}
              />
            </Grid>
  
            <Grid item xs={12}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.lastName?.message)}
                    fullWidth={true}
                    label="Last name"
                    variant="filled"
                    helperText={errors.lastName?.message}
                  />
                )}
              />
            </Grid>
  
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.email?.message)}
                    fullWidth={true}
                    type="email"
                    label="Email"
                    variant="filled"
                    helperText={errors.email?.message}
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
              >
                Registration
              </Button>
              <Button
                color="inherit"
                type="submit"
                component={Link}
                to="/login"
              >
                Already have an account?
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }