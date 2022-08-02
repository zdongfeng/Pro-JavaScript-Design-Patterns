# 观察者者模式

### 定义

观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象，这个主题对象在状态上发生变化时，会通知所有观察者对象，让他们能够自动更新自己。


### 场景

> - 宗门任务大殿
>   - 维护拥有订阅权限的弟子列表
>   - 提供弟子购买订阅权限的功能
>   - 发布对应任务后通知有订阅权限的弟子
> - 接受任务通知的弟子们
>
> 上面宗门任务大殿与弟子间的关系其实就构成了一个观察者模式。

#### 参考

- [观察者模式 vs 发布订阅模式，千万不要再混淆了](https://juejin.cn/post/7055441354054172709)

### 代码实现

#### 思路

-   创建一个Subject 类，内置添加观察者addObserver、删除观察者deleteObserver、通知观察者notifyObservers方法。
-   创建一个Observer 类，观察者通过此类创建出来。
-   实例化一个观察者类Subject 。
-   实例一个或者多个观察者类Observer 。
-   利用addObserver方法讲被观察者注册到观察者上。
-   利用notifyObservers方法通知观被察者。

#### 代码

```
// 定义观察者类
class Subject {
  constructor(){
    // 观察者集合
    this.observers = []
  }
  // 添加观察者
  addObserver(observer){
    console.log(observer, '添加了')
    this.observers.push(observer)
  }
  // 删除观察者
  deleteObserver(observer){
    console.log(observer, '删除了')
    this.observers = this.observers.filter(item => item !== observer)
  }

  // 通知观察者
  notifyObservers(target){
    this.observers.forEach(observer => observer.notify(target))
  }
}

// 定义被观察者类
class Observer{
  constructor(name){
    this.name = name
  }
  notify(target){
    console.log(`弟子${this.name}，任务大殿现有${target}任务,速来领取！`)
  }
}
```

上面是一个我们实现的观察者模式实例，我们现在测试一下：

```

// 实例一个观察者
const subject = new Subject()

// 实例被观察者类
const lilei = new Observer('李雷')
const zhanghua = new Observer('张华')
const zhangsan = new Observer('张三')

// 将被观察者添加进观察者中
subject.addObserver(lilei)
subject.addObserver(zhanghua)
subject.addObserver(zhangsan)

// 任务大殿有任务了，通知弟子来领取	
subject.notifyObservers('打扫藏书阁')
// 弟子李雷，任务大殿现有打扫藏书阁任务,速来领取！
// 弟子张华，任务大殿现有打扫藏书阁任务,速来领取！
// 弟子张三，任务大殿现有打扫藏书阁任务,速来领取！


// 任务大殿的取消对张华的通知
subject.deleteObserver(zhanghua)

subject.notifyObservers('斩杀桃源镇隐藏筑基境妖兽')
// 弟子李雷，任务大殿现有斩杀桃源镇隐藏筑基境妖兽任务,速来领取！
// 弟子张三，任务大殿现有斩杀桃源镇隐藏筑基境妖兽任务,速来领取！
```

### 总结

**观察者模式：**

-   观察者模式是一种**「对象行为型模式」**。其定义了一种**「对象间的一对多依赖关系」**，当观察目标发生状态变化，会通知所有观察者对象，使它们自动更新。

#### 优点

- 降低了目标与观察者之间的耦合关系，两者之间是抽象耦合关系
- 目标与观察者之间建立了一套触发机制

#### 缺点

- 目标与观察者之间的依赖关系并没有完全解除，而且有可能出现循环引用

- 当观察者对象很多时，通知的发布会花费很多时间，影响程序的效率

  

**案例**:  Vue双向数据绑定