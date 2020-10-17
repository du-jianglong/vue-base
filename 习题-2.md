# VUE 练习题

## 1、下面关于 Vue.js 的数据响应式描述正确的是：【A】

A. 任何一个对象都可以被设置为响应式对象，当该对象的数据发生变化后可以通知视图更新。

B. 只有 Vue.js 中的选项 data (如：new Vue({ data: {  } }))才可以设置为响应式对象，当该对象的数据发生变化后通知视图更新。

C. Dep 对象的作用是收集依赖，每一个属性都会对应一个 Dep 对象，当属性变化时会调用 Dep 对象的 notify 方法发送通知更新视图。

D. 1个 Dep 对象可能会对应多个 Watcher 对象，当数据变化触发依赖 Dep 对象通知对应的 Watcher 对象更新视图。

>_____________________________________________________

## 2、下面关于响应式原理描述错误的是：【B】

A. 给 data 对象的某个属性设置为一个新的对象 (this.o = { name: 'xxx' })，此对象是响应式的。

B. 点击按钮的时候给 data 对象上的 obj 新增一个 name 属性 (this.obj.name = 'xxx')，该属性是响应式的。

C. Vue.js 内部当数据变化后，直接更新真实 DOM。

D. Vue.js 内部当数据变化后，首先操作的是虚拟 DOM。

>_____________________________________________________

## 简答题

>1、当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如果把新增成员设置成响应式数据，它的内部原理是什么？
===

```~
let vm = new Vue({
  el: '#el'
  data: {
    o: 'object',
    dog: {}
  },
  method: {
    clickHandler () {
      // 该 name 属性是否是响应式的
      this.dog.name = 'Trump'
    }
  }
})
```

>答：不是响应式数据。响应式对象和响应式数组是指在vue初始化时期，利用Object.defineProperty()方法对其进行监听，这样在修改数据时会及时体现在页面上。
>
>设置为响应式数据有两种方法：
>
>1、给 dog 的属性 name 设置一个初始值，可以为空字符串或者 undefined 之类的，代码和原因如下：

```~
let vm = new Vue({
    el: '#app',
    data: {
        msg: 'object',
        dog: {
            name: ''
        }
    },
    method: {
        clickHandler() {
            // 该 name 属性是否是响应式的
            this.dog.name = 'Trump'
        }
    }
})
```

>原因：
>
>**vm[key] setter** 操作的时候会触发 **data[key]** 的 ***setter*** 操作，**data[key]** 的 ***setter*** 操作会 *walk* 这个新的值（*walk* 方法是给 *data* 里的对象类型的值设置响应式），而题目中的 *data* 的 *dog* 是个空对象，没有任何属性，所以初始化 Vue 实例的时候，在给 *dog* 设置 ***proxy*** 的时候没有任何属性有 ***getter*** 和 ***setter*** 方法，所以在点击按钮动态的给 *dog* 添加 *name* 属性，并设置值的时候是不会触发 *dog* 对象下的属性 *name* 的 *setter* 方法，故不是响应式数据。而给 *dog* 对象添加了 *name* 的初始值后，*dog* 对象的 *name* 属性就有了 **getter** 和 **setter** 方法，故可以实现响应式。
>
>2、使用 Vue.set(target, key, value) 时，target 为需要添加属性的对象，key 是要添加的属性名，value 为属性 key 对应的值。源码[参考链接：https://www.cnblogs.com/heavenYJJ/p/9559439.html](https://www.cnblogs.com/heavenYJJ/p/9559439.html)
>
>3、如果是在开发环境，且 target 未定义（为 null、undefined ）或 target 为基础数据类型（string、boolean、number、symbol）时，抛出告警；
>
>4、如果 target 为数组且 key 为有效的数组 key 时，将数组的长度设置为 target.length 和 key 中的最大的那一个，然后调用数组的 splice 方法（ vue 中重写的 splice 方法）添加元素；
>
>5、如果属性 key 存在于 target 对象中且 key 不是 Object.prototype 上的属性时，表明这是在修改 target 对象属性 key 的值（不管 target 对象是否是响应式的，只要 key 存在于 target 对象中，就执行这一步逻辑），此时就直接将 value 直接赋值给 target[key]；
>
>6、判断 target，当 target 为 vue 实例或根数据 data 对象时，在开发环境下抛错；
>
>7、当一个数据为响应式时，vue 会给该数据添加一个 ob 属性，因此可以通过判断target对象是否存在 ob 属性来判断 target 是否是响应式数据，当 target 是非响应式数据时，我们就按照普通对象添加属性的方式来处理；当 target 对象是响应式数据时，我们将 target 的属性 key 也设置为响应式并手动触发通知其属性值的更新；
>
>***defineReactive(ob.value, key, val)***，将新增属性设置为响应式; ***ob.dep.notify()*** 手动触发通知该属性值的更新, 所以我们可以修改代码如下：
>
```~
let vm = new Vue({
        el: '#app',
        data: {
            msg: 'object',
            dog: {
                name: undefined
            }
        },
        method: {
            clickHandler() {
                // 该 name 属性是否是响应式的
                this.$set(this.data.dog, name, 'Trump')
            }
        }
    })
```
