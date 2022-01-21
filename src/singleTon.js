// class 实现 单例模式
// class SingleTom {
//     constructor (name, age) {
//         if (!SingleTom.hasInstance) {
//             this.name;
//             this.age;
//             SingleTom.hasInstance = this;
//         }
//         console.log("this is", this);
//         return SingleTom.hasInstance;
//     }
//     add () {
//         console.log("aaaa")
//     }
// }
// const obj1 = new SingleTom('Jack', 12);
// const obj2 = new SingleTom('Tom', 14)
// console.log(obj1 === obj2)
// console.log(SingleTom.hasInstance)
// obj1.add()
// 闭包实现
const SingleTom = (function () {
    function Fn(name, age) {
        this.name = name;
        this.age = age;
    }
    let instance = null;
    return function () {
        if (!instance) {
            instance = new Fn(...arguments)
        }
        return instance;
    }
})()

const obj1 = SingleTom('jack', 12);
const obj2 = SingleTom('Tom', 14);
console.log(obj1 === obj2)
console.log(obj1.name, obj1.age);
console.log(obj2.name, obj2.age)