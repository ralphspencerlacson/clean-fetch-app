import React from "react";
// Hooks
import { useProducts } from "../../hooks/product/useProduct";
// Components
import PageTitle from "../../components/common/PageTitle";
import SideDrawer from "../../components/common/SideDrawer";
import TagManager from "../../components/tag/TagManager";
import ProductForm from "../../components/inventory/products/ProductForm";
import CardList from "../../components/common/CardList";
// AntD
import { Col, Row } from "antd";

const Products = () => {
    const { data: products, isLoading } = useProducts();

    return (
        <>
            <PageTitle
                title="Products"
                description="Manage your products here"
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
                    <Col>Filter Control</Col>

                    <Col>
                        {/* Add Product */}
                        <SideDrawer
                            title="Add Product"
                            width={800}
                            button={
                                <button className={` text-white bg-blue-500 border cursor-pointer rounded-lg text-[12px] px-8 py-2 `}>
                                    Add Product
                                </button>
                            }
                        >
                            <ProductForm />
                        </SideDrawer>
                    </Col>
                </Row>

                <Row>
                    <CardList
                        data={products?.data}
                        isLoading={isLoading}
                        type="product"
                    />
                </Row>
            </div>
        </>
    );
};

export default Products;
