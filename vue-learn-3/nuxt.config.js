/* Nuxt.js 配置文件*/

module.exports = {
    router: {
        linkActiveClass: 'active',
        // 自定义路由表规则
        extendRoutes(routes, resolve) {
            // 清除 nuxt.js 基于 pages 目录默认生成的路由表规则
            routes.splice(0)
            // 添加自己的路由规则
            routes.push(... [
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/'),
                    children: [
                        {
                            name: 'home',
                            path: '',   //为空，默认子路由
                            component: resolve(__dirname, 'pages/home/')
                        },
                        {
                            name: 'login',
                            path: '/login',
                            component: resolve(__dirname, 'pages/login/')
                        },
                        {
                            name: 'register',
                            path: '/register',
                            component: resolve(__dirname, 'pages/login/')
                        },
                        {
                            name: 'profile-username',
                            path: '/profile/:username?',
                            component: resolve(__dirname, 'pages/profile/')
                        },
                        {
                            name: 'setting',
                            path: '/setting',
                            component: resolve(__dirname, 'pages/setting/')
                        },
                        {
                            name: 'editor',
                            path: '/editor',
                            component: resolve(__dirname, 'pages/editor/')
                        },
                        {
                            name: 'article',
                            path: '/article/:slug',
                            component: resolve(__dirname, 'pages/article/')
                        }
                    ]
                }
            ])
        }
    }
}