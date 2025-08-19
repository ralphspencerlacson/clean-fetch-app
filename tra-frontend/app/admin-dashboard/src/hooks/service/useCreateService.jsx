import { useMutation, useQueryClient } from "@tanstack/react-query";
import ServiceServices from "../../services/service/ServiceServices";

export const useCreateService = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ServiceServices.createService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["services"] });
        }
    });
}