// Utils
import API from "../../utils/API";

const API_BASE_SLUG = '/v1';

const ProductServices = {
    getProducts: async () => {
        const response = await API.get(`${API_BASE_SLUG}/product`);
        return response.data;
    },
    createProduct: async (productData) => {
        const response = await API.post(`${API_BASE_SLUG}/product`, productData);
        return response.data;
    }
}

export default ProductServices;