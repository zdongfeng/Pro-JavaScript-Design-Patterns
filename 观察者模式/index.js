/*
 * @Descripttion: 观察者模式
 * @Author: zhaodongfeng
 * @Date: 2022-08-01 10:50:29
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-08-01 17:59:37
 */

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

// 观察者通知被观察者
subject.notifyObservers('打扫藏书阁')

subject.deleteObserver(zhanghua)

subject.notifyObservers('斩杀桃源镇隐藏筑基境妖兽')
