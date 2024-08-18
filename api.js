import axios from 'axios';

const API_BASE_URL = 'http://localhost:9876';

export const fetchProducts = (category, params) => {
    return axios.get(${API_BASE_URL}/categories/${category}/products, { params });
};

export const fetchProductDetails = (category, productId) => {
    return axios.get(${API_BASE_URL}/categories/${category}/products/${productId});
};