####  观察者模式

> 观察者模式： 定义了对象间一种一对多的依赖关系，当目标对象Subject的状态发生改变时，所有依赖它的对象Observer都会得到通知

##### 模式特征

​	1、一个目标者对象Subject，拥有方法：添加、删除、通知Observer

​	2、多个观察者对象Observer,拥有方法：接收Subject状态变更通知并处理

​	3、目标对象Subject状态变更时，通知所有Observer



​	Subject 添加一系列Observer,Subject 负责维护与这些Observer之间的联系，‘我更新，通知你’



##### 代码实现

```javascript
// 目标者类
class Subject {
    constructor() {
        this.observers = [] // 观察者列表
    }
    // 添加
    add(observer) {
        this.observers.push(observer)
    }
    // 删除
    remove(observer) {
        let index = this.observers.findIndex(item => item === observer)
        index > -1 && this.observer.splice(index, 1)
    }
    // 通知
    notify() {
        for (let observer of this.observers) {
            observer.update()
        }
    }
}

// 观察者类
class Observer{
    constructor(message) {
        this.message = message
    }
    // 目标对象更新时触发的回调
    update() {
        console.log(this.message)
    }
}

// 实例化两个目标者
let subject = new Subject()

// 实例观察者
let obs = new Observer('hello 观察者模式')
```



