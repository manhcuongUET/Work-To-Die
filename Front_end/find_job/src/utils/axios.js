import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5050'
})

axiosInstance.interceptors.request.use(
    (config) => new Promise((resolve) => setTimeout(() => resolve(config), 700))
)
export default axiosInstance;