// 车
class Car {
    constructor(num) {
        this.num = num
    }
}

// 入口摄像头
class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

// 出口显示器
class Screen {
    show(car, inTime) {
        console.log('车牌号', car.num)
        console.log('停车时间', Date.now() - inTime)
    }
}

// 停车场
class Park {
    constructor(floors) {
        this.floors = floors || []// 层数
        this.camera = new Camera() // 关联类的方式是这种直接在类中引用实例到自己的属性可
        this.screen = new Screen()
        this.carList = {}// 存储摄像头拍摄返回的车辆信息
    }
    in(car) {// 进入停车场时
        // 获取摄像头的信息：号码 时间
        const info = this.camera.shot(car)
        // 停到某个车位
        const i = parseInt(Math.random() * 100 % 100)
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        // 记录信息
        this.carList[car.num] = info
    }
    out(car) {// 驶出停车场时
        // 获取信息
        const info = this.carList[car.num]
        const place = info.place
        place.out()

        // 显示时间
        this.screen.show(car, info.inTime)

        // 删除信息存储
        delete this.carList[car.num]
    }
    emptyNum() {// 整个停车场的所有空位数量
        return this.floors.map(floor => {
            return `${floor.index} 层还有 ${floor.emptyPlaceNum()} 个车位`
        }).join('\n')
    }
}

// 层
class Floor {
    constructor(index, places) {
        this.index = index// 当前第几层
        this.places = places || []// 这一层有多少个停车位
    }
    emptyPlaceNum() {// 空余车位方法
        let num = 0
        this.places.forEach(p => {
            if (p.empty) {
                num = num + 1
            }
        })
        return num
    }
}

// 车位
class Place {
    constructor() {
        this.empty = true// true时当前车位为空
    }
    in() {
        this.empty = false
    }
    out() {
        this.empty = true
    }
}

// 测试代码------------------------------
// 初始化停车场
const floors = []
for (let i = 0; i < 3; i++) {
    const places = []
    for (let j = 0; j < 100; j++) {
        places[j] = new Place()
    }
    floors[i] = new Floor(i + 1, places)
}
const park = new Park(floors)

// 初始化车辆
const car1 = new Car('A1')
const car2 = new Car('A2')
const car3 = new Car('A3')

console.log('第一辆车进入')
console.log(park.emptyNum())
park.in(car1)
console.log('第二辆车进入')
console.log(park.emptyNum())
park.in(car2)
console.log('第一辆车离开')
park.out(car1)
console.log('第二辆车离开')
park.out(car2)

console.log('第三辆车进入')
console.log(park.emptyNum())
park.in(car3)
console.log('第三辆车离开')
park.out(car3)