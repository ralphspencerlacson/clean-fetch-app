import React from "react";
import { startCase } from "lodash";
import CardItem from "./CardItem";
import SideDrawer from "./SideDrawer";
import ServiceForm from "../inventory/services/ServiceForm";
import ProductForm from "../inventory/products/ProductForm";

const CardList = ({ data = [], isLoading, type}) => {
    // Handle loading state
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // Handle empty data state
    if (data.length === 0) {
        return <p>No Data</p>;
    }

    return (
        <div className="flex flex-row justify-between gap-4 my-8">
            {data.length > 0 &&
                data.map((item) => (
                    <>
                        <SideDrawer
                            key={item.id} 
                            title={`Add ${startCase(type)}`}
                            width={600}
                            button={<CardItem data={item} />}
                        >
                            {type === "service" ? <ServiceForm existingData={item} /> : <ProductForm existingData={item} />}
                        </SideDrawer>
                    </>
                ))}
        </div>
    );
};

export default CardList;
