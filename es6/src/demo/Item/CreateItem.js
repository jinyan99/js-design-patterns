import Item from './Item.js'

// 优惠商品的处理逻辑
function createDiscount(item) {
    // 用代理模式Proxy做折扣显示，接受item返回新的代理item对象
    // 代理好处就是不用改以前的item原始数据，我们直接代理层外界获取对应键时返回代理后的值
    return new Proxy(item, {
        get: function (target, key, receiver) {
            if (key === 'name') {
                return `${target[key]}【折扣】`
            }
            if (key === 'price') {
                return target[key] * 0.8
            }
            return target[key]
        }
    })
}

// 工厂函数
export default function (list, itemData) {
    if (itemData.discount) {
        itemData = createDiscount(itemData)
    }
    return new Item(list, itemData)
}

