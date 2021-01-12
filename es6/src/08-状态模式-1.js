// 状态类 红绿灯 每个颜色灯都是一个它的一个实例 (内用---接受一个主体，本状态实例都将作用在这个主体上)
class State {
    constructor(color) {
        this.color = color
    }
    handle(context) {
        console.log(`turn to ${this.color} light`)
        context.setState(this)
    }
}

// 主体类 (外用) 提供获取状态 设置状态的方法
class Context {
    constructor() {
        this.state = null
    }
    setState(state) {
        this.state = state
    }
    getState() {
        return this.state
    }
}

// 核心就是把状态和主体抽象出来，主体可以获取设置状态信息，状态类可以操作主体

// 测试代码
let context = new Context()// 生成一个作用主体

let greed = new State('greed')// 绿灯状态实力
let yellow = new State('yellow')// 黄灯状态实例
let red = new State('red')// 红灯状态实例

// 绿灯亮了
greed.handle(context)
console.log(context.getState())
// 黄灯亮了
yellow.handle(context)
console.log(context.getState())
// 红灯亮了
red.handle(context)
console.log(context.getState())

