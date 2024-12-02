import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from "../routes";
import { ROUTES } from "../utils/constants";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <Switch>
            {user ? (
                privateRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} exact />
                ))
            ) : (
                publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} exact />
                ))
            )}
            <Redirect to={user ? ROUTES.CHAT : ROUTES.LOGIN} />
        </Switch>
    );
};

export default AppRouter;
