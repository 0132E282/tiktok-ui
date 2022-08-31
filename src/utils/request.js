import axios from 'axios';
const Require = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (url, options = {}) => {
    const response = await Require.get(url, options);
    return response.data;
};
export default Require;
