# Nuxt.js 学习案例

```~
创建项目：
    1. 创建项目：**mkdir realworld-nuxtjs**
    2. 初始化项目：**npm init -y**
    3. 安装Nuxt：**npm i nuxt**
    4· 配置启动脚本：
        package.json ————> scripts
            "dev": "nuxt"
    5· 创建 pages 目录，配置初始页面。
    6. 根目录下新建 **nuxt.config.js** 文件：处理 Nuxt.js 配置文件（自定义路由规则）。
    7. 安装 axios：**npm i axios**
    8. 根目录下新建 **utils/requests.js**，基于 axios 封装的请求模块。
    9、根目录下新建 store：**store** 关于数据持久化。（需要安装：js-cookie、cookieparser）
    10、根目录下新建 middleware：**middleware** 中间件，作用是：验证是否登录，根据返回结构重定向到相应页面。
```

>开源学习项目（由多种技术实现）。
>
>GitHub仓库：**[https://github.com/gothinkster/realworld](https://github.com/gothinkster/realworld)**
>
>在线示例：**[https://demo.realworld.io/#/](https://demo.realworld.io/#/)**
>
>页面模板：**[https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md)**
>
>接口文档：**[https://github.com/gothinkster/realworld/tree/master/api](https://github.com/gothinkster/realworld/tree/master/api)**
>

```~
学习收获：
1· 掌握使用 Nuxt.js 开发同构渲染应用
2· 增强 Vue.js 实践能力
3· 掌握同构渲染应用中常见的功能处理
    1· 用户状态管理
    2· 页面访问权限处理
    3. **SEO 优化**
    4. ......
4· 掌握同构渲染应用的发布与部暑
```
