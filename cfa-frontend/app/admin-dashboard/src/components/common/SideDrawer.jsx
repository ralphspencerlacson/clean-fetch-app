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
 * @param {string} [props.buttonText] - Optional custom text for the button. Defaults to the drawer title.
 * @param {'small' | 'large'} [props.buttonSize='small'] - Controls the size of the button.
 *        - 'small': Smaller font and padding
 *        - 'large': Larger font and padding
 * @param {string} [props.buttonClass] - Extra CSS classes for button styling.
 * @param {React.ReactNode} props.children - Content to render inside the drawer.
 */
const SideDrawer = ({ title, width, buttonText, buttonSize="small", buttonClass, children }) => {
    const [open, setOpen] = useState(false);

        // Clone children and pass the close function
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return cloneElement(child, { closeSideDrawer: () => setOpen(false) });
        }
        return child;
    });

    return (
        <div>
            <button
                className={` text-blue-500 border-blue-500 border cursor-pointer rounded-lg
                    ${buttonSize === "small" ?
                        " text-[12px] px-4 py-2 "  :
                        " text-[14px] px-8 py-2 "}
                     ${buttonClass}`}
                onClick={() => setOpen(true)}>{buttonText || title}</button>

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
