import { useMutation, useQueryClient } from "@tanstack/react-query";
import TagServices from "../../services/tag/TagServices";

export const useUpdateTag = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ tagId, tagData }) => TagServices.updateTag(tagId, tagData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tags"] });
        }
    })
}