import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <main className="py-4 px-40">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
