class jQuery {
    constructor(selector) {// 这个selector就是$(传的选择器)
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))// 快速克隆，可以将伪数组快速变成数组类型
        let len = dom ? dom.length : 0
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }
    append(node) {

    }
    addClass(name) {

    }
    html(data) {

    }
    // 此处省略若干 API
}
window.$ = function (selector) {
    return new jQuery(selector)
}

// 测试代码
var $p = $('p')
console.log($p)
console.log($p.addClass)