import { useMutation, useQueryClient } from "@tanstack/react-query";
import TagServices from "../../services/tag/TagServices";

export const useDeleteTag = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ tagId }) => TagServices.deleteTag(tagId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tags"] });
        }
    })
}