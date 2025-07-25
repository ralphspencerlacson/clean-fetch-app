import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
// Context
import { AuthProvider } from "./context/AuthContext";
// Component
import AppRoutes from "./components/auth/AppRoutes";
// CSS
import "./App.css";

function App() {
    const queryClient = new QueryClient();

    return (
        <>{/* Auth Context */}
            <AuthProvider>
                <QueryClientProvider client={queryClient}> {/* React Query Client */}

                    {/* Main Application Routes */}
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>

                </QueryClientProvider>
            </AuthProvider>
        </>
    );
}

export default App;
