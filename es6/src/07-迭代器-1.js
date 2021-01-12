class Iterator {
    constructor(conatiner) {
        // 拿到list数据
        this.list = conatiner.list
        this.index = 0
    }
    next() {
        if (this.hasNext()) {
            // this.index++ 在变量自增(this.index值自增)的同时，还返回它的新值
            return this.list[this.index++]
        }
        return null
    }
    hasNext() {
        if (this.index >= this.list.length) {
            return false
        }
        return true
    }
}

// 接收任意数据结构集合的一个接纳容器，接纳容器提供一个获得遍历器的方法
class Container {
    constructor(list) {
        this.list = list
    }
    getIterator() { // 方法返回一个遍历器
        return new Iterator(this)
    }
}

// 测试代码
let container = new Container([1, 2, 3, 4, 5])
let iterator = container.getIterator()
// 这就是迭代器的遍历方式，不管源数据是什么数据类型 迭代器处理后 想要遍历都用相同的方式遍历 很方便 就不用forEach遍历方法
while(iterator.hasNext()) {
    console.log(iterator.next())
}