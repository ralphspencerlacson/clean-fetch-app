import { useMutation, useQueryClient } from "@tanstack/react-query";
import TagServices from "../../services/tag/TagServices";

export const useCreateTag = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: TagServices.createTag,
        onSuccess: () => {
            queryClient.invalidateQueries({ querykey: ["tags"]})
        }
    })
}