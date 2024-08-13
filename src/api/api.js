//项目中我们大多数时候都会把对应的接口请求封装成api来调用
import service from '@/utils/service.js'

//登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/api2/login',
        data: data //可简写为data
    })
}

