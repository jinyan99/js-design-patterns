// JS实现观察者的示例代码

// 主题，接收状态变化，触发每个观察者
class Subject {
    constructor() {
        this.state = 0
        this.observers = []// 对应的多个观察者的列表
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }
    attach(observer) {
        this.observers.push(observer)
    }
    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
}

// 观察者，等待被触发
class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)// 将当前观察者实例attach到被观察者subject中
    }
    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

// 测试代码 1对3
let s = new Subject()// 一个主体
let o1 = new Observer('o1', s)// 1观察者
let o2 = new Observer('o2', s)// 2观察者
let o3 = new Observer('o3', s)// 3观察者

s.setState(1)
s.setState(2)
s.setState(3)

