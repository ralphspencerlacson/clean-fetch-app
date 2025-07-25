import { Routes, Route } from "react-router-dom";
// Components
import PrivateRoute from "./PrivateRoute";
import AdminLayout from "../common/AdminLayout";
// Pages
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";
import Dashboard from "../../pages/Dashboard";
import Products from "../../pages/InventoryPage/Products";
import Services from "../../pages/InventoryPage/Services";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            {/* Public */}
            <Route path="/" element={<HomePage />} />

            {/* Private */}
            <Route element={<AdminLayout />}>
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                <Route path="/inventory">
                    <Route
                        path="products"
                        element={
                            <PrivateRoute>
                                <Products />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="services"
                        element={
                            <PrivateRoute>
                                <Services />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
