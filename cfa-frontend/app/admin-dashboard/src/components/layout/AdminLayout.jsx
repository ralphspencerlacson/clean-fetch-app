
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// Utils
import { useAuth } from "../../context/AuthContext";
// AntD
import {
    AppstoreOutlined,
    HomeOutlined,
    CalendarOutlined,
    ShoppingCartOutlined,
    LogoutOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Menu, Dropdown, Avatar } from "antd";


const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useAuth();

    const [collapsed, setCollapsed] = useState(false);

    const onClick = (e) => {
        navigate(e.key);
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

        const handleProfile = () => {
        navigate("/profile");
    };

    const handleHome = () => {
        if (location.pathname !== "/") {
            navigate("/");
        }
    }

    // Menu items for the sidebar
    const pageMenu = [
        {
            key: "/dashboard",
            label: "Dashboard",
            icon: <AppstoreOutlined />,
        },
        {
            key: "/bookings",
            label: "Bookings",
            icon: <CalendarOutlined />,
        },
        {
            key: "/products",
            label: "Products",
            icon: <ShoppingCartOutlined />,
        },
        {
            key: "/products",
            label: "Products",
            icon: <ShoppingCartOutlined />,
        },
        {
            key: "/products",
            label: "Products",
            icon: <ShoppingCartOutlined />,
        },
        {
            key: "/products",
            label: "Products",
            icon: <ShoppingCartOutlined />,
        },
        {
            key: "/products",
            label: "Products",
            icon: <ShoppingCartOutlined />,
        },
    ];

    const profileMenu = [
        {
            key: 'profile',
            label: 'Profile',
            icon: <UserOutlined />,
            onClick: handleProfile,
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            label: 'Logout',
            icon: <LogoutOutlined />,
            onClick: handleLogout,
            danger: true,
        },
    ];

    return (
        <div className={`h-screen flex flex-row`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-10">
                <h2
                    className="text-lg font-bold cursor-pointer text-blue-600 hover:text-blue-700" 
                    onClick={handleHome}
                >
                    Clean Fetch App
                </h2>
            </div>

            {/* Sidebar */}
            <div className={`pt-14 relative flex flex-col  border-r border-gray-200 ${collapsed ? 'w-[120px]' : 'w-[256px]'}`}>
                {/* Collapse */}
                <div className={`${collapsed ? 'flex justify-center' : ''} py-4 p-4 border-b border-gray-200`}>
                    <Button
                        type="text"
                        onClick={() => setCollapsed(!collapsed)}
                        size="small"
                    >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                </div>

                {/* Menu */}
                <Menu
                    onClick={onClick}
                    className={`h-full ${collapsed ? '!w-[120px]' : 'w-[256px]'}`}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['dashboard']}
                    mode="inline"
                    items={pageMenu}
                    inlineCollapsed={collapsed}
                />

                {/* Logout button */}
                <div className="absolute p-4 bottom-0 w-full">
                   {/* Profile & Logout Section */}
                <div className="border-t border-gray-200 p-3">
                    {collapsed ? (
                        <div className="flex justify-center">
                            <Dropdown 
                                menu={{ items: profileMenu }} 
                                placement="topRight"
                                trigger={['click']}
                            >
                                <Avatar 
                                    size="default" 
                                    icon={<UserOutlined />}
                                    className="cursor-pointer bg-blue-500 hover:bg-blue-600"
                                />
                            </Dropdown>
                        </div>
                    ) : (
                        // Expanded state - user info with dropdown
                        <div>
                            <Dropdown 
                                menu={{ items: profileMenu }} 
                                placement="topRight"
                                trigger={['click']}
                            >
                                <div className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-100">
                                    <Avatar 
                                        size="small" 
                                        icon={<UserOutlined />}
                                        className="bg-blue-500"
                                    />
                                    <div className="ml-3 flex-1">
                                        <div className="text-sm font-medium text-gray-900">
                                            {user?.full_name || `${user?.first_name} ${user?.last_name}`}
                                        </div>
                                        <div className="text-xs text-gray-500 capitalize">
                                            {user?.user_type}
                                        </div>
                                    </div>
                                </div>
                            </Dropdown>
                        </div>
                    )}
                </div>
                </div>
            </div>

            {/* Content */}
            <main className="py-20 overflow-y-auto flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
