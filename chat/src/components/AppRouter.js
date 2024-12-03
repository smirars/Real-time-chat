import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE} from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";
import ChatSelector from "../components/ChatSelector";
import ChatRoom from "../components/ChatRoom";

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <Routes>
            {user
                ? (
                    <>
                        {privateRoutes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))}
                        <Route path="/select-chat" element={<ChatSelector />} />
                        <Route path="/chat/:chatId" element={<ChatRoom />} />
                    </>
                ) : (
                    publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))
                )}
            <Route path="*" element={<Navigate to={user ? "/select-chat" : LOGIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;

