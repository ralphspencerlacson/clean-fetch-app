// Utils
import API from "../../utils/API";

const API_BASE_SLUG = '/v1';

const ServiceServices = {
    getServices: async () => {
        const response = await API.get(`${API_BASE_SLUG}/service`);
        return response.data;
    },
    createService: async (serviceData) => {
        const response = await API.post(`${API_BASE_SLUG}/service`, serviceData);
        return response.data;
    }
}

export default ServiceServices;
