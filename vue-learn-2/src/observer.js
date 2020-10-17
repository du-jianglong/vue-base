/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

class Observer {
  constructor (data) {
    this.walk(data)
  }

  walk (data) {
    // 1、判断data是否是对象
    if (!data || typeof data !== 'object') {
      return
    }

    // 2、遍历data所有属性
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }

  defineReactive (obj, key, val) {
    let _this = this

    // 收集依赖，并发送通知
    let dep = new Dep()

    //   如果val是对象，会把val内部的属性转换成响应式数据
    _this.walk(val)

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () {
        // 收集依赖
        Dep.target && dep.addSub(Dep.target)
        return val
      },
      set (newVal) {
        if (newVal === val) {
          return
        }

        val = newVal

        _this.walk(newVal)

        // 发送通知
        dep.notify()
      }
    })
  }
}
