import axios from "axios";
import { getToken } from "./setToken";
import { Message } from "element-ui";

const service = axios.create({
    baseURL: '/api', //baseURL会自动加在请求地址上
    timeout: 3000
})


//添加请求拦截器
service.interceptors.request.use((config) => {
    //在请求之前做些什么（获取并设置token）
    config.headers['token'] = getToken('token');
    console.log('请求的 URL:', config.url);
    return config;
}, (error) => {
    return Promise.reject(error);
})


//添加响应拦截器
service.interceptors.response.use((response) => {
    debugger;
    //对响应数据做些什么
    let {code, message} = response.data;
    if (code != 200) {
        Message({message: message || 'error', type: 'warning'});
    }
    return response;
}, (error) => {
    return Promise.reject(error)
})


export default service