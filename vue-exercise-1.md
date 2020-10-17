# virtual-dom-exercise

Virtual DOM 练习题。

选择题

>_____________________________________________________

## 1、下面关于虚拟 DOM 的说法正确的是：A

A. 使用虚拟 DOM 不需要手动操作 DOM，可以极大的提高程序的性能。

B. 使用虚拟 DOM 不需要手动操作 DOM，可以极大的提高开发效率。

C. 虚拟 DOM 可以维护程序的状态，通过对比两次状态的差异更新真实 DOM。

D. 虚拟 DOM 本质上是 JavaScript 对象，可以跨平台，例如服务器渲染、Weex 开发等。

>_____________________________________________________

## 2、下面关于 Snabbdom 库的描述错误的是：D

A. Snabbdom 库是一个高效的虚拟 DOM 库，Vue.js 的虚拟 DOM 借鉴了 Snabbdom 库。

B. 使用 h() 函数创建 VNode 对象，描述真实 DOM 结构。

C. Snabbdom 库本身可以处理 DOM 的属性、事件、样式等操作。

D. 使用 patch(oldVnode, null) 可以清空页面元素

>_____________________________________________________
简答题

1、请简述 patchVnode 函数的执行过程。

>pathNode主要是对比新旧两个节点，进而进行更新。
>
>对比过程如下：
>
> >新节点更新了text属性，与旧节点本身的属性做比较，如果旧节点有children则直接移除，然后设置新节点对应DOM的text属性。
新节点和旧节点都有children，且不相等，则调用updateChildren()，对比子节点的差异进行更新。
只有新节点有children属性，旧节点有text属性，则移除旧节点的text属性，添加所有的子节点
只有旧节点有children或者text属性，则移除旧节点的children或text属性。
