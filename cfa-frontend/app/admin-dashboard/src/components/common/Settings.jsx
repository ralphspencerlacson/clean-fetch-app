import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const Settings = ({ title, width, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button className="text-blue-500 text-[14px] px-8 py-2 rounded-lg border border-blue-500 cursor-pointer" onClick={() => setOpen(true)}>Settings</button>

            <Drawer
                title={
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <CloseOutlined onClick={() => setOpen(false)} />
                  </div>
                }
                placement="right"
                closable={false}
                onClose={() => setOpen(false)}
                width={width || 720}
                open={open}
            >

                {children}

            </Drawer>
        </div>
    );
};

export default Settings;
