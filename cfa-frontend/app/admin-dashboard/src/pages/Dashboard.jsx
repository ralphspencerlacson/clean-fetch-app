import React from "react";
import SideDrawer from "../components/common/SideDrawer";
import TagManager from "../components/tag/TagManager";

const Dashboard = () => {
    return (
        <div>
            <SideDrawer
                title="Settings"
                width={600}
                button={
                    <button
                        className={` text-blue-500 border-blue-500 border cursor-pointer rounded-lg text-[14px] px-8 py-2 `}
                    >
                        Settings
                    </button>
                }
            >
                <TagManager />
            </SideDrawer>
        </div>
    );
};

export default Dashboard;
