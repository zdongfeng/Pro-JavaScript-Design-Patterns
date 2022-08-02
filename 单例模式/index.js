/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-06-16 16:28:17
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-16 17:06:52
 */
// 单例模式

/**
 * 单例模式
 * @desc: 规定一个类只有一个实例，并且提供可全局访问点；
 */

// 最简单的单例模式  全局对象
// let obj = {
//     name: '小黄',
//     getName: function(){ console.log(this.name) }
// }

// obj.getName()

// 闭包版单例模式
// let CreateSingleton = (function(){
//     let instance = null
//     return function(name){
//         console.log( name, instance, arguments )
//         this.name = name
//         if( instance ){
//             return instance
//         }
//         return instance = this
//     }
// })()
// CreateSingleton.prototype.getName = function(){
//     console.log(this.name)
// }

// let red = new CreateSingleton('小红')
// red.getName() // 小红
// let blue = new CreateSingleton('小蓝')
// blue.getName() // 小红

// 代理版单例模式
/**
 * @desc: 通过代理的形式，将创建对象的操作和实例判断的操作进行解耦拆分
 */
let proxyCreateSingleton = (function(){
    let instance = null
    return function(name){
        if(instance){
            return instance
        }
        return instance = new Singlton(name)
    }
})()

let Singlton = function(name){
    this.name = name
}

Singlton.prototype.getName = function(){
    console.log(this.name)
}

let green = new proxyCreateSingleton('小绿')
green.getName() // 小绿
let pink = new proxyCreateSingleton('小粉')
pink.getName() // 小粉
