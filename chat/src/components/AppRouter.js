import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from "../routes";
import { ROUTES } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <Routes>
            {user ? (
                privateRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} exact />
                ))
            ) : (
                publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} exact />
                ))
            )}
            <Navigate to={user ? ROUTES.CHAT : ROUTES.LOGIN} />
        </Routes>
    );
};

export default AppRouter;
