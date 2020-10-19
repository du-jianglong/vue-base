const cookieparser = process.server ? require('cookieparser') : undefined


/* 
 在服务器运行期间，运行的都是同一个实例。
 为了防止冲突，必须把 state 定义成一个函数，
 并返回相应的数据对象。
*/

// 每次调用 state 都会通过函数，动态返回一个对象，
// 如此就不会造成数据冲突和污染。
export const state = () => {
    return {
        // 当前登录用户的状态
        user: null
    }
}

// 设置 state
export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    // nuxtServerInit 是一个特殊的 action 方法
    // 这个 action 会在服务端渲染期间自动调用
    // 作用：初始化容器数据，传递数据给客户端使用
    nuxtServerInit({commit}, {req}) {
        // commit：提交 mutation 的 click 方法
        // reg：往服务端渲染的 request 请求对象

        let user = null

        // (req.headers.cookie)：nodejs 服务端代码
        // 如果请求头中有 Cookie
        if (req.headers.cookie) {
            // cookieparser：用来解析 cookie 数据的，返回一个javascript对象
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }

        // 提交 mutation 修改 state 状态
        commit('setUser', user)
    }
}