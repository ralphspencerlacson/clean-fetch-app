import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem("token") || null,
        user: JSON.parse(localStorage.getItem("user")) || null,
        roles: [],
        permissions: [],
    });

    const isAuthenticated = !!auth.token;

    const login = ({ token, user, roles, permissions }) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setAuth({ token, user, roles, permissions });
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setAuth({
            token: null,
            user: null,
            roles: [],
            permissions: [],
        });
    };

    return (
        <AuthContext.Provider value={{ ...auth, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
