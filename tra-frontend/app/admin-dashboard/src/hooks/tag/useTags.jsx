import { useQuery } from "@tanstack/react-query";
import TagServices from "../../services/tag/TagServices";

export const useTags = () => {

    return useQuery({
        queryKey: ["tags"],
        queryFn: TagServices.getTags,
    })
}