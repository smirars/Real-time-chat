import React, { useContext } from 'react';
import { Button, Container, Grid, Box } from "@mui/material";
import { Context } from "../index";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signInAnonymously } from "firebase/auth";

const Login = () => {
    const { auth } = useContext(Context);

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
    
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
        } catch (error) {
            if (error.code === 'auth/popup-blocked') {
                console.warn('Всплывающее окно заблокировано, перенаправление...');
                try {
                    await signInWithRedirect(auth, provider);
                } catch (redirectError) {
                    console.error("Ошибка при перенаправлении:", redirectError);
                }
            } else {
                console.error("Ошибка входа:", error);
            }
        }
    };

    const loginAsGuest = async () => {
        try {
            const result = await signInAnonymously(auth);
            console.log("Гостевой вход выполнен:", result.user);
        } catch (error) {
            console.error("Ошибка гостевого входа:", error);
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
                        <Button onClick={loginWithGoogle} variant="outlined">
                            Войти с помощью Google
                        </Button>
                    </Box>
                    <Box>
                        <Button onClick={loginAsGuest} variant="outlined" color="secondary">
                            Войти как гость
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
