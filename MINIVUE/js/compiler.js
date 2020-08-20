/*
Compiler
- 功能（实际上就是dom操作）
  - 负责编译模板，解析指令/差值表达式
  - 负责页面的首次渲染
  - 当数据变化后重新渲染视图
- 结构
  Compiler
  - el
  - vm

  - compile(el)
  - compileElement(node)
  - compileText(node)
  - isDirective(attrName)
  - isTextNode(node)
  - isElementNode(node)
*/

class Compile {
  constructor(vm) {
    this.el = vm.$el;
    this.vm = vm;
    this.compile(this.el);
  }

  // 编译模板，处理文本节点和元素节点
  compile(el) {
    // 获取 el 的所有子节点 （children为子元素，childNode为子节点）
    let childNodes = el.childNodes;
    // 遍历子节点（childNode为伪数组，转换为数组后遍历）
    Array.from(childNodes).forEach(node => {
      if (this.isTextNode(node)) {
        // 处理文本节点
        this.compileText(node);
      } else if (this.isElementNode(node)) {
        // 处理元素节点
        this.compileElement(node);
      }

      // 判断node节点是否有子节点，如果有则要递归调用compile
      if (node.childNodes && node.childNodes.length) {
        this.compile(node);
      }
    })
  }

  // 编译元素节点，处理指令
  compileElement(node) {
    // console.log(node.attributes);
    // 遍历所有的属性节点
    Array.from(node.attributes).forEach(attr => {
      // 判断是否是指令
      let attrName = attr.name;
      if (this.isDirective(attrName)) {
        // v-text --> text
        attrName = attrName.substr(2);
        let key = attr.value;
        this.update(node, key, attrName);
      }
    })
  }
  update(node, key, attrName) {
    console.log(attrName);
    let updateFn = this[attrName + 'Updater'];
    updateFn && updateFn(node, this.vm[key]);
  }
  // 处理 v-text 指令
  textUpdater(node, value) {
    node.textContent = value;
  }
  // 处理 v-model 指令
  modelUpdater(node,value) {
    node.value = value;
  }

  // 编译文本节点，处理差值表达式
  compileText(node) {
    // 以对象形式打印 node
    // console.dir(node);

    // {{ msg }} 正则匹配差值表达式
    let reg = /\{\{(.+?)\}\}/;
    let value = node.textContent;
    if (reg.test(value)) {
      let key = RegExp.$1.trim();
      node.textContent = value.replace(reg, this.vm[key]);
    }
  }

  // 判断元素属性是否为指令（是否为 v- 开头）
  isDirective(attrName) {
    return attrName.startsWith('v-');
  }

  // 判断节点是否为文本节点
  isTextNode(node) {
    return node.nodeType === 3;
  }

  // 判断节点是否为元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }
}