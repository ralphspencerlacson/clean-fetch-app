// Utils
import API from "../../utils/API";

const API_BASE_SLUG = '/v1';

const TagServices = {
    getTags: async () => {
        const response = await API.get(`${API_BASE_SLUG}/tags`);
        return response.data;
    },
    createTag: async (tagData) => {
        const response = await API.post(`${API_BASE_SLUG}/tags`, tagData);
        return response.data;
    },
    updateTag: async (tagId, tagData) => {
        const response = await API.patch(`${API_BASE_SLUG}/tags/${tagId}`, tagData);
        return response.data;
    },
    deleteTag: async (tagId) => {
        const response = await API.delete(`${API_BASE_SLUG}/tags/${tagId}`);
        return response.data;
    },
};

export default TagServices;
