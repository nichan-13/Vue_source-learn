/*
Vue
- 功能
  - 负责初始化的参数（选项）
  - 负责把 data 中的属性注入到 Vue 实例中，转换成 getter/setter
  - 负责调用 observer 监听 data 中所有属性的变化
  - 负责调用 compiler 解析指令/差值表达式
- 结构
  Vue
  - $options
  - $el
  - $data

  - _proxyData()
*/

class Vue {
  constructor(options) {
    // 1. 通过属性保存选项的数据
    this.$options = options || {};
    this.$data = options.data || {};
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;

    // 2. 把data中的成员转换成getter和setter，注入到vue实例中
    this._proxyData(this.$data);

    // 3. 调用observer对象，监听数据的变化
    new Observer(this.$data);
    // 4. 调用compiler对象，解析指令和差值表达式
    new Compile(this);
  }
  _proxyData(data) {
    // 遍历data中的所有属性
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        // 把data的属性注入到vue实例中
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newValue) {
          if (newValue === data[key]) {
            return;
          }
          data[key] = newValue;
        }
      })
    })
  }
}