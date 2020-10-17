import {init} from "snabbdom/src/package/init"
import {h} from "snabbdom/src/package/h"

// patch函数：对比两个vnode的差异更新到真实的DOM
let patch = init([])

// 第一个参数：标签+选择器
// 第二个参数：如果是字符串的话就是标签中的内容
let vnode = h('div#container',{
    hook:{
        init(vnode){
            console.log(vnode)
        },
        create(emptyVnode, vnode){
            console.log(emptyVnode)
            console.log(vnode)
        }
    }
}, '你好，Virtual DOM ！')

let app = document.querySelector('div')

// 第一个参数：可以是DOM参数，内部会把DOM元素转换为vnode
// 第二个参数：vnode
// 返回值：vnode
let oldVnode = patch(app, vnode)

vnode = h('div', '你好，这是对比结果！')

patch(oldVnode, vnode)
