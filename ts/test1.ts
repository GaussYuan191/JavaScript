// 使用const关键字修饰的枚举为常量枚举，与普通枚举区别的是会在整个编译阶段被删除
// const enum Color {
//   RED,
//   PICK,
//   BLUE,
// }

import { type } from "os";

// const color: Color[] = [Color.RED, Color.PICK, Color.BLUE];
// console.log("color", color);

// let bigObject: Object;
// bigObject = {};
// console.log(bigObject);

//函数重载
// function add(x: number, y: number): number;
// function add(x: string, y: string): string;
// function add(x: any, y: any): any {
//   return x + y;
// }
// 使用
// console.log("add", add(1, 3), add("1", "3"));
// 类型断言
// 尖括号写法
// let str: any = "to be or not to be";
// let strLength: number = (<string>str).length;
// as写法
// let str: any = "to be or not to be";
// let strLength: number = (str as string).length;
// console.log("sstr", strLength)
// 非空断言，在无法判断类型时，可以用！断言对象是非null和非undefined
// let user: null | string | undefined;
// console.log(user!.toUpperCase());
// 确定赋值断言，定义变量没有赋值，则会报错，用！断言，编译器就知道会被明确地赋值
// let value!: number;
// console.log("aaa", value);
// 联合类型，联合类型用| 分隔
// 类型别名
// type count = number | number[];
// function hello(value: count) {
// }
// 交叉类型与联合类型相反，用&表示，交叉类型表示两者都存在，key相同但类型不同，则key为never类型
// interface IpersonA {
//   name: string;
//   age: number;
// }
// interface IpersonB {
//   name: string;
//   gender: string;
// }
// let person: IpersonA & IpersonB = {
//   name: "事业",
//   age: 12,
//   gender: "男",
// };
interface IPerson<T1=string, T2=number> {
  name: T1;
  age: T2
}

type IPerson1 = IPerson
let p: IPerson1<number, string> = {
  name: 1,
  age: 'aa'
}

interface IpersonA {
  name?: string;
  age: number;
}
interface IpersonB extends IpersonA {
  name: string;
  gender: string;
}
 
let person:  IpersonB = {
  name: "事业",
  age: 12,
  gender: "男",
};
export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
const a: Equals<IpersonA, IpersonB> = false;

interface base {
  title: string
}
const 
interface selfBase extends base {
  colSpan: string
}

interface base2 {
  name: string
  columns: base
}

interface selfBase2 extends base2 {
  key: string,

}

// 类型守卫，在运行时检查，确保一个值在所要求的类型中
// in,typeof(只支持基础类型),instanceof,自定义类型
// 接口-对象的状态(属性)和行为(方法)的抽象(描述)
// interface Person {
//   name: string;
//   age: number;
// }
// readonly设置只读
// 接口和类型别名都可以用来描述对象或函数类型，只是语法不同，interface用extends来扩展，type使用&实现扩展
// 不同点：1.type可以声明基本数据类型别名、联合类型、元组，而interface不行
// 2.interface能够合并声明，而type不行
// type Username = string(√) interface string { value : string }(×)
// 泛型-是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
// 泛型工具类型--typeof
// let p1 = {
//   name: "树哥",
//   age: 18,
//   gender: "male",
// };
// type Person = typeof p1;
// function getName(p: Person): string {
//   return p.name;
// }
// console.log(p1, getName(p1));
// keyof 可以用来获取一个对象接口中的所有key值
// interface Person {
//   name: string;
//   age: number;
//   gender: "male";
// }
// type PersonKey = keyof Person
// in--用来遍历枚举类型
// type Keys = "a" | "b" | "c";
// type Obj = {
//   [p in Keys]: any;
// };
// { a: any, b: any, c: any}
// infer, 可以用infer声明一个类型变量并对它使用(不太懂)
// type ReturnType1<T> = T extends (
//     ...args: any[]
// ) => infer R ? R : any
// extends可以约束泛型
// 索引访问操作符--[]
// interface Person {
//   name: string;
//   age: number;
// }
// type x = Person["name"];
// 内置工具类型
// 1.Required 将类型的属性变成必选 2.Partial 将类型的属性变成可选
// 3.Exclude<T, U>的作用是将某个类型中属于另一个的类型移除，剩余的属性构成新的类型
// type T0 = Exclude<"a" | "b" | "c", "a">;  // 'b' | 'c'
// 4.Extract<T, U> 与 Exclude 相反 从 T 中 提取出 U
// type  T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'> // 'a'
// 5.Readonly 将数组中的所有属性转为只读的
// 6.Record<K extends keyof any, T>的作用将K中的所有属性的值转化成T类型
// type Property = 'key1' | 'key2';
// type Person = Record<Property, string>

// const p: Person = {
//     key1: 'hello',
//     key2: '数'
// }
// 7.pick 从某个类型中挑出一些属性出来
// type Person = {
//   name: string;
//   age: number;
//   gender: string;
// };
// type P1 = Pick<Person, 'name' | 'age'>
// const user:P1 = {
//     name: '数组',
//     age: 1
// }

// function sayHello(name: string) {
//     let sname:string = name
//     console.log("sname", sname)
// }

// sayHello(undefined)

interface demo {
  name?: boolean;
  [propsName: string]: any;
}

const obj:demo = {name: 1}
