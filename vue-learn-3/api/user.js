/* 封装接口请求 */

import requests from '@/utils/requests'

// 用户登录
export const login = (data) => {
    return requests({
        method: 'POST',
        url: '/api/users/login',
        data: data
    })
}

// 用户注册
export const register = (data) => {
    return requests({
        method: 'POST',
        url: '/api/users',
        data: data
    })
}

// 个人资料
export const profiles = (data) => {
    return requests({
        method: 'GET',
        url: '/api/profiles/' + data
    })
}