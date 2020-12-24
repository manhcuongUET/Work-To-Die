import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://obscure-falls-32340.herokuapp.com/'
})

axiosInstance.interceptors.request.use(
    (config) => new Promise((resolve) => setTimeout(() => resolve(config), 700))
)
export default axiosInstance;