import React from "react";
// Components
import PageTitle from "../../components/common/PageTitle";
import SideDrawer from "../../components/common/SideDrawer";
import TagManager from "../../components/tag/TagManager";
import ServiceForm from "../../components/inventory/services/ServiceForm";
// AntD
import { Col, Row } from "antd";

const Services = () => {
    return (
        <>
            <PageTitle
                title="Services"
                description="Manage your services here"
                button={
                    <SideDrawer title="Settings" width={600} buttonSize="large">
                        <TagManager />
                    </SideDrawer>
                }
            />

            <Row gutter={[16, 16]} justify="space-between" align="middle">
                <Col>
                    Filter Control
                </Col>

                <Col>
                    {/* Add Service */}
                    <SideDrawer
                        title="Add Service"
                        width={800}
                        buttonSize="small"
                        buttonClass={"bg-blue-500 text-white"}
                    >
                        <ServiceForm />
                    </SideDrawer>
                </Col>
            </Row>
        </>
    );
};

export default Services;
