import React, { useContext } from 'react';
import { Button, Container, Grid, Box } from "@mui/material";
import { Context } from "../index";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
        } catch (error) {
            console.error("Ошибка входа:", error);
        }
    };

    return (
        <Container>
            <Grid container alignItems="center" justifyContent="center" style={{ height: 'calc(100vh - 50px)' }}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    style={{ width: 400, background: 'lightgray', padding: 20 }}
                >
                    <Box>
                        <Button onClick={login} variant="outlined">
                            Войти с помощью Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
