import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE, CHAT_ROUTE } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <Routes>
            {user
                ? privateRoutes.map(({ path, Component }) => (
                      <Route key={path} path={path} element={<Component />} />
                  ))
                : publicRoutes.map(({ path, Component }) => (
                      <Route key={path} path={path} element={<Component />} />
                  ))}
            <Route path="*" element={<Navigate to={user ? CHAT_ROUTE : LOGIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
