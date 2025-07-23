import { Routes, Route } from "react-router-dom";
// Components
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layout/MainLayout";
// Pages
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";
import Dashboard from "../../pages/Dashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>

            <Route 
                path="/dashboard" 
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } 
            />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
