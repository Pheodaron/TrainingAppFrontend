import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Grid,
    Container,
    Button,
    Typography,
    Snackbar,  
} from "@mui/material"
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { useStore } from "effector-react";
import { $auth } from "../../models/auth";

function Profile() {
    const auth = useStore($auth);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
        // reset,
      } = useForm({
        resolver: yupResolver(validationSchema),
      });

    const onSubmit = async (data) => {
      try {
            setIsOpen(true);
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
              <Typography variant="h6">Update profile</Typography>
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue={auth?.user.firstName}
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
                  defaultValue={auth?.user.lastName}
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
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isLoading}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
          <Snackbar
            open={isOpen}
            autoHideDuration={6000}
            onClose={() => setIsOpen(false)}
            message="Profile updated successfully"
          />
        </Container>
      );

}

export default Profile;