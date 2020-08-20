/*
Observer
- 功能
  - 负责把 data 选项中的属性转换成响应式数据
  - data 中的某个属性也是对象，把该属性转换成响应式数据
  - 数据变化发送通知
- 结构
  Observer
  - walk(data)
  - defineReactive(data, key, value)
*/

class Observer {
  constructor(data) {
    this.walk(data);
  }

  walk(data) {
    // 1. 判断 data 是否是对象
    if (!data || typeof data !== 'object') {
      return;
    }
    // 2. 遍历 data 对象的所有属性
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    });
  }

  defineReactive(obj, key, val) {
    let that = this;
    // 如果val是对象，把val内部的属性转换成响应式数据
    this.walk(val);

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val;
        // 为什么需要传递第三个参数 val？
        // return obj[key];  // Uncaught RangeError: Maximum call stack size exceeded
        // 直接调用 obj[key] 会造成死递归
      },
      set(newValue) {
        if (newValue === val) {
          return;
        }
        val = newValue;

        // 如果重新赋值的属性newValue为对象，把newValue内部的属性转换成响应式数据
        // 此处不可直接使用this，因为此处this指向data对象而不是Observer实例
        that.walk(newValue);

        // 发送通知
      }
    })
  }
};