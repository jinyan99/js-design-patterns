//JS中使用单例模式
//JS写有个缺点是不能像java的单例模式那样私有化它的构造函数，这个能做到单例但是外界直接new构造函数还是不会报错，
//但是用java的话私有化写成的单例模式直接new会报错，只能让你用静态函数获取单例
class SingleObject {
    login() {
        console.log('login...')
    }
}
SingleObject.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance
    }
})()

// 测试
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2)

let obj3 = new SingleObject() // 按理是应该报错的，但现在还做不到，后面会有版本做到像java那样构造函数私有化