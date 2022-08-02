/*
 * @Descripttion: 发布订阅者模式
 * @Author: zhaodongfeng
 * @Date: 2022-07-28 17:23:06
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-07-29 15:39:30
 */
class Observer {
  constructor() {
    // 所有订阅的消息都存入到这个调度中心
    this.subjects = {}
  }
  // 消息订阅
  $on(type, fn) {
    console.log(type, fn)
    // 判断调度中心是否存在这个属性，不存在就初始化一个空数组
    if (!this.subjects[type]) this.subjects[type] = []
    // 向数组中添加传入的订阅回调
    this.subjects[type].push(fn)
  }
  // 消息发布
  $emit(type) {
    // 判断调度中心是否存在此订阅，没有就结束
    if (!this.subjects[type]) return
    // 循环执行此订阅里的所有消息
    console.log(this.subjects[type])
    this.subjects[type].forEach(item => item())
  }
  // 取消订阅
  $off(type, fn) {
    // 判断调度中心是否存在此订阅，没有就结束
    if (!this.subjects[type]) return
    // 判断是否传入具体fn, 若未穿入直接删除整个消息队列
    if (!fn) this.subjects[type] = undefined
    // 若有具体fn，删除订阅里的此方法
    else {
      this.subjects[type] = this.subjects[type].filter(item => item !== fn)
    }
  }
}

let observer = new Observer()
let fn1= function () {
  console.log('小明的手机号码：11345165432')
}
let fn2= function () {
  console.log('小红的手机号码：12345165432')
}
let fn3= function () {
  console.log('小赵的手机号码：12345665332')
}
let fn4= function () {
  console.log('小林的手机号码：12345665412')
}
// observer.$on('English', fn1)
observer.$on('English', fn1)
observer.$on('English', fn2)
observer.$on('maths', fn3)
observer.$on('maths', fn4)


observer.$emit('English')
observer.$off('maths',fn3 )
observer.$emit('maths')
