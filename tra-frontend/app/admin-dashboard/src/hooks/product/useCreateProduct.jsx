import { useMutation, useQueryClient } from "@tanstack/react-query";
import ProductServices from "../../services/product/ProductServices";

export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ProductServices.createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        }
    });
}