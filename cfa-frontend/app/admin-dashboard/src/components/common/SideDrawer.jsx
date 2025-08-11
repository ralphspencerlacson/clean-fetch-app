import React, { useState, cloneElement } from "react";
import { Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";

/**
 * SideDrawer Component
 *
 * Renders a customizable button that opens an Ant Design Drawer from the right.
 *
 * @param {Object} props
 * @param {string} props.title - Title displayed in the drawer header and as fallback button text.
 * @param {number} [props.width=720] - Width of the drawer in pixels.
 * @param {React.ReactElement} [props.button] - Component of the button that opens the drawer.
 * @param {React.ReactNode} props.children - Content to render inside the drawer.
 */
const SideDrawer = ({ title, width, button, children }) => {
    const [open, setOpen] = useState(false);

    const triggerButton = button ? cloneElement(button, {
        onClick: () => setOpen(true),
    }) : null;

    // Clone children and pass the close function
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return cloneElement(child, { closeSideDrawer: () => setOpen(false) });
        }
        return child;
    });

    return (
        <div>
            {triggerButton}

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

                {childrenWithProps}

            </Drawer>
        </div>
    );
};

export default SideDrawer;
