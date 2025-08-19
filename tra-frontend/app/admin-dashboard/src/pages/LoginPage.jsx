import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// Context
import { useAuth } from "../context/AuthContext";
// Utils
import API from "../utils/API";
// AntD
import { Button, Input, Typography, Alert } from "antd";

const { Title } = Typography;

const LoginPage = () => {
    const {token,  login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [loginType, setLoginType] = useState("customer");
    const [portal, setPortal] = useState("website");

    // If authenticated, redirect to dashboard
    if (token) {
        return <Navigate to="/dashboard" replace />;
    }

    const handleLogin = async () => {
        try {
            const res = await API.post("/login", {
                email,
                password,
                login_type: loginType,
                portal: portal,
            });

            login(res.data);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.error || "Login failed");
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-lg">
                    <Title level={3} className="text-center mb-4">
                        Login
                    </Title>

                    {error && (
                        <Alert
                            message={error}
                            type="error"
                            showIcon
                            className="mb-4"
                        />
                    )}

                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4 my-2"
                    />

                    <Input.Password
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 my-2"
                    />

                    <Button
                        type="primary"
                        block
                        onClick={handleLogin}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
