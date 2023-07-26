import axios, { Axios } from "axios";

const AxiosInstance = axios.create({ baseURL: `` })
AxiosInstance.interceptors.request.use(async (config)=> {
    const accessToken = localStorage.getItem('tokensmartboss');
    const tempToken = sessionStorage.getItem('tokensmartbosstemp');

    config.headers.Authorization = `Bearer ${tempToken ? tempToken : accessToken}`;
    config.headers.DeviceToken = `2023`;

    return config;
});
AxiosInstance.interceptors.response.use(
    (res)=>{
        return res
    },
    (error)=>{
        console.log(error)
        return Promise.reject(error);
    }
)
export default AxiosInstance

