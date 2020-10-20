/* 基于 axios 封装的请求模块 */

import axios from 'axios'
const Cookie = process.client ? require('js-cookie') : undefined

const requests = axios.create({
    baseURL: 'https://conduit.productionready.io',
    timeout: 10000,
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

//请求拦截器
// requests.interceptors.request.use(
//     config => {
//         // 该处可以将config打印出来看一下，该部分将发送给后端（server端）
//         let token
        
//         if (Cookie.get('user')) {
//             token = JSON.parse(Cookie.get('user')).token
//         }
        
//         // console.log(token)

//         if (token) {
//             config.headers.token = token
//         }
//         // console.dir(config)
//         return config // 对config处理完后返回，下一步将向后端发送请求
//     },
//     error => { // 当发生错误时，执行该部分代码
//         console.log('当发生错误时，执行该部分代码:')
//         console.dir(error); //调试用
//         return Promise.reject(error)
//     }
// )

//响应拦截器
requests.interceptors.response.use(
    response => {
        // 该处为后端返回整个内容
        // const res = response.data;
        // 该处可将后端数据取出，提前做一个处理
        if (response.status === 200) {
            return Promise.resolve(response)
            // 该处将结果返回，下一步可用于前端页面渲染用
        } else {
            console.log('响应拦截器通过后错误：')
            // console.error(response.data.errmsg)
            return Promise.reject(response)
        }
    },
    error => {
        if (error && error.response) {
            // 1.公共错误处理
            // 2.根据响应码具体处理
            switch (error.response.status) {
                case 400: err.message = '请求错误(400)' ; break;
                case 401:
                    // 这里写清除token的代码
                    Cookie.remove('user');
                    err.message = '未授权，请重新登录(401)';
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
                    });
                    break;
                case 403: err.message = '拒绝访问(403)'; break;
                case 404: err.message = `请求出错(404)`; break;
                case 405: err.message = '请求方法未允许(405)'; break;
                case 408: err.message = '请求超时(408)'; break;
                case 500: err.message = '服务器错误(500)'; break;
                case 501: err.message = '服务未实现(501)'; break;
                case 502: err.message = '网络错误(502)'; break;
                case 503: err.message = '服务不可用(503)'; break;
                case 504: err.message = '网络超时(504)'; break;
                case 505: err.message = 'HTTP版本不受支持(505)'; break;
                default: err.message = `连接出错(${err.response.status})!`;
 
            }
        } else {
            // 超时处理
            if (JSON.stringify(error).includes('timeout')) {
                console.error('服务器响应超时，请刷新当前页')
            }
            error.message('连接服务器失败')
        }

        console.log('响应拦截器错误：')
        console.error(error.message)
        return Promise.reject(error)
    }
)

export default requests