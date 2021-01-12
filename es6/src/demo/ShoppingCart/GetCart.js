class Cart {
    constructor() {
        this.list = []
    }
    add(data) {
        this.list.push(data)
    }
    del(id) {
        this.list = this.list.filter(item => {
            if (item.id === id) {
                return false
            }
            return true
        })
    }
    getList() {
        return this.list.map(item => {
            return item.name
        }).join('\n')
    }
}
// 上面这个Cart类要做成单例的，所以这个原始类不会export出去的，export出去的是单例后的getCart方法

// 返回单例
let getCart = (function () {
    let cart
    return function () {
        if (!cart) {
            cart = new Cart();
        }
        return cart
    }
})()

export default getCart