import axios from 'axios';
const Require = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (url, options = {}) => {
    const response = await Require.get(url, options);
    return response.data;
};
export const post = async (url, data = {}, options = {}) => {
    const response = await Require.post(url, data, options);
    return response.data;
};
export const deletes = async (url, options = {}) => {
    const response = await Require.delete(url, options);
    return response.data;
};
export const patch = async (url, options = {}) => {
    const response = await Require.patch(url, options);
    return response.data;
};
export default Require;
