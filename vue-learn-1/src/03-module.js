import {init} from "snabbdom/src/package/init"
import {h} from "snabbdom/src/package/h"
import {styleModule} from "snabbdom/src/package/modules/style"
import {eventListenersModule} from "snabbdom/src/package/modules/eventlisteners"

var num = 0

let patch = init([
    styleModule,
    eventListenersModule
])

let vnode = h('div#container', {
    style:{
        background: 'red'
    },
    on:{
        click: eventHandler
    }
},
[
    h('h1', '你从哪儿来？'),
    h('p', '要到哪儿去？')
])

let app = document.querySelector('#app')

patch(app, vnode)

function eventHandler() {
    num += 1
    let color = document.getElementById('container').style

    if (color.background == 'red') {
        color.background = 'pink'
    } else {
        color.background = 'red'
    }

    alert('你疯狂的点了我 '+ num +' 次了！')
}
