import { useQuery } from "@tanstack/react-query";
import ProductServices from "../../services/product/ProductServices";

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: ProductServices.getProducts,
    })
}