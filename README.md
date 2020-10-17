# vue-base

## vue开发环境搭建及配置

>1、下载 并 安装：node.js [http://nodejs.cn/](http://nodejs.cn/)
>
>2、在nodejs安装路径下，新建 **node_global** 和 **node_cache** 两个文件夹
>
>3、设置缓存文件夹 ：
> > > **npm config set cache "D:\Develop\nodejs\node_cache"**
> > >
> 设置全局模块存放路径 ：
> > >**npm config set prefix "D:\Develop\nodejs\node_global"**
>
>4、基于 Node.js 安装cnpm（淘宝镜像）：
> > > **npm install -g cnpm --registry=<https://registry.npm.taobao.org>**
>
>5、设置环境变量（非常重要）
> > > a. 鼠标右键"此电脑"，选择“属性”菜单，在弹出的“系统”对话框中左侧选择“高级系统设置”，
> > >
> > > 弹出“系统属性”对话框，在【系统变量】下新建【NODE_PATH】，
> > > 输入【D:\Develop\nodejs\node_global\node_modules】
> > >
> > > b. 将【用户变量】下的【Path】->【默认的npm路径】修改为【D:\Develop\nodejs\node_global】
>
>6、安装Vue (注: 重启下CMD窗口)
> > > **cnpm install vue -g**
>
>7 、安装vue命令行工具，即vue-cli 脚手架
> > > **cnpm install vue-cli -g**
>
>8 、Vue项目创建
> > > a、在创建项目的文档目录下打开命令行工具CMD窗口
> > >
> > > b、**vue init webpack** 项目名称
>
>9、**npm install**
>
>10、**npm run dev** 运行就好了
>
> (注:)  在Powershell窗口运行【yarn 或 Vue】报错 "无法加载文件... 因为在此系统上禁止运行脚本"。
>
> > > 在电脑搜索 powershell ，并且以管理员身份打开powershell。
>
> > > 输入 set-ExecutionPolicy RemoteSigned
> > > 全部选 Y 。问题解决 参考链接: [https://www.cnblogs.com/sunnyeve/p/12598198.html](https://www.cnblogs.com/sunnyeve/p/12598198.html)
>_____________________________________________________
>_____________________________________________________
>_____________________________________________________
>npm run dev报错：
>
> Errors:
>
> 1  <http://eslint.org/docs/rules/quotes>
>
> 1  <http://eslint.org/docs/rules/comma-dangle>
>
> 1  <http://eslint.org/docs/rules/semi>
>
>
> You may use special comments to disable some warnings.
>
> Use // eslint-disable-next-line to ignore the next line.
>
> Use /*eslint-disable*/ to ignore all warnings in a file.
>
>"standard"插件代表的是eslint的standard插件都要安装
>
>解决办法：
>
> > > .eslintrc.js文件中去掉’@vue/standard’
>