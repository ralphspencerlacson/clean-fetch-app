import React from "react";
// Components
import PageTitle from "../../components/common/PageTitle";
import SideDrawer from "../../components/common/SideDrawer";
import TagManager from "../../components/tag/TagManager";
import ProductForm from "../../components/inventory/products/ProductForm";
// AntD
import { Col, Row } from "antd";

const Products = () => {
    return (
        <>
            <PageTitle
                title="Products"
                description="Manage your products here"
                button={
                    <SideDrawer title="Settings" width={600}>
                        <TagManager />
                    </SideDrawer>
                }
            />
            <Row gutter={[16, 16]} justify="space-between" align="middle">
                <Col>Filter Control</Col>

                <Col>
                    {/* Add Product */}
                    <SideDrawer
                        title="Add Product"
                        width={800}
                        buttonSize="small"
                        buttonClass={"bg-blue-500 text-white"}
                    >
                        <ProductForm />
                    </SideDrawer>
                </Col>
            </Row>
        </>
    );
};

export default Products;
