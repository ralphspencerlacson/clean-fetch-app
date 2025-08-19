import { useQuery } from "@tanstack/react-query";
import ServiceServices from "../../services/service/ServiceServices";

export const useServices = () => {
    return useQuery({
        queryKey: ["services"],
        queryFn: ServiceServices.getServices,
    })
}