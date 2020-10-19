/* 封装接口请求 */

import request from '@/utils/requests'

// 用户登录
export const login = (data) => {
    return request({
        method: 'POST',
        url: '/api/users/login',
        data: data
    })
}

// 用户注册
export const register = (data) => {
    return request({
        method: 'POST',
        url: '/api/users',
        data: data
    })
}