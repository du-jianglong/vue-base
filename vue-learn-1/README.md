# 关于 Virtual DOM --> (Snabbdom)

## 什么是虚拟DOM

>virtual DOM 虚拟DOM，用普通js对象来描述DOM结构，因为不是真实DOM，所以称之为虚拟DOM。

## 虚拟DOM的作用和类库

>虚拟DOM作用
> >可以维护视图和状态之间的关系。
> >
> >复杂视图情况下提升渲染性能。
> >
> >虚拟DOM除了可以渲染成DOM节点，还可以渲染到其他平台如ssr(nuxt.js/next.js)、原生应用（weex/rn）、小程序等，增加了跨平台能力。
>
>开源库
> >snabbdom
> > >vue 2.x就是使用的snabbdom并进行了一定的改造
> > >
> > >代码量少
> > >
> > >可以通过模块进行扩展
> > >
> > >源码使用ts开发

## snabbdom文档

>英文文档：[https://github.com/snabbdom/snabbdom](https://github.com/snabbdom/snabbdom)
>
>中文文档：[https://github.com/coconilu/Blog/issues/152](https://github.com/coconilu/Blog/issues/152)

## 导入snabbdom

>采用es module 方式导入snabbdom
>
>```import {init} from "snabbdom/src/package/init"```
>
>h函数的作用是生成一个虚拟dom,我们在vue中也在使用
>
>init() 是一个高阶函数，返回一个patch()
>
>thunk()是一种优化策略，主要优化复杂视图

## 总结一下

>先引入模块
>
>```import {styleModule} from "snabbdom/src/package/modules/style"```
>
>init() 初始化的时候是一个数组，可以传入我们需要的模块，也可不传
>
>我们在 h() 函数的第二个参数中，可以增加相关的配置，第二个参数是一个对象。
>
>如果我们需要给该节点增加子节点，则第三个参数为数组，若只是想添加节点内容则需要是字符串。
>
>____________________________________________________
>
>运行之前执行：**yarn**
>
>**npm run dev**
>