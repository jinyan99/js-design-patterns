class People {
    constructor(name) {
        this.name = name
    }
    saySomething() {

    }
}
class A extends People {
    constructor(name) {
        super(name)
    }
    saySomething() {
        alert('I am A')
    }
}
class B extends People {
    constructor(name) {
        super(name)
    }
    saySomething() {
        alert('I am B')
    }
}
let a = new A('a')
a.saySomething()
let b = new B('b')
b.saySomething()// 这就是大概解释了同一个方法不同表态的意思，涉及到方法的重载