import { Grid, Container, Typography, Button } from "@mui/material";
import api from "../../services/api";

export function Home() {
    return (
    <Container maxWidth="sm">
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>
                    Homepage
                </Typography>
                <Typography variant="body1" gutterBottom>
                    This is demo app with login and registration
                </Typography>
                <Button 
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={() => {
                        api.auth.test();
                }}>
                    Запрос
                </Button>
            </Grid>
        </Grid>
    </Container>
    );
}