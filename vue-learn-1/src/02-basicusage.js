import {init} from "snabbdom/src/package/init"
import {h} from "snabbdom/src/package/h"

let patch = init([])

// div中放置子元素：h1，p
let vnode = h('div#container', [
    h('h1', '你好，第一个子元素！'),
    h('p', '你好，第二个子元素！')
])

let app = document.querySelector('#app')

let oldVnode = patch(app, vnode)

setTimeout(() => {
    vnode = h('div#context', [
        h('h1', '你好，第一个子元素变化！'),
        h('p', '你好，第二个子元素变化！')
    ])
    patch(oldVnode, vnode)
    // 清空页面元素
    // id不变：oldVnode，id改变：vnode
    patch(vnode, h('!'))
}, 3000);
