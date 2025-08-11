import React from "react";
// Hooks
import { useServices } from "../..//hooks/service/useService";
// Components
import PageTitle from "../../components/common/PageTitle";
import SideDrawer from "../../components/common/SideDrawer";
import TagManager from "../../components/tag/TagManager";
import ServiceForm from "../../components/inventory/services/ServiceForm";
import CardList from "../../components/common/CardList";
// AntD
import { Col, Row } from "antd";

const Services = () => {

    const { data: services, isLoading } = useServices();

    return (
        <>
            <PageTitle
                title="Services"
                description="Manage your services here"
                button={
                    <SideDrawer
                        title="Settings"
                        width={600}
                        button={
                            <button className={` text-blue-500 border-blue-500 border cursor-pointer rounded-lg text-[14px] px-8 py-2 `}>
                                Settings
                            </button>
                        }
                    >
                        <TagManager />
                    </SideDrawer>
                }
            />

            <div className="mt-20">
                <Row gutter={[16, 16]} justify="space-between" align="middle">
                    <Col>
                        Filter Control
                    </Col>

                    <Col>
                        {/* Add Service */}
                        <SideDrawer
                            title="Add Service"
                            width={800}
                            button={
                                <button className={` text-white bg-blue-500 border cursor-pointer rounded-lg text-[12px] px-8 py-2 `}>
                                    Add Services
                                </button>
                            }
                        >
                            <ServiceForm />
                        </SideDrawer>
                    </Col>
                </Row>

                <Row>
                    <CardList
                        data={services?.data}
                        isLoading={isLoading}
                        type="service"
                    />
                </Row>
            </div>
        </>
    );
};

export default Services;
