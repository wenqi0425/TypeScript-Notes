/*
    联合类型（Union Types）：
        TypeScript 中的一种高级类型，允许一个变量具有多种不同的类型。
        具体来说，联合类型使用 | 运算符将多个类型组合在一起，表示这个变量可以是其中任何一个类型。
        e.g. let value: string | number;
        
        1）联合类型表示取值可以为多种类型中的一种
        2）联合类型使用 | 分隔每个类型
        3）联合类型只能访问此联合类型的所有类型里共有的属性或方法
        4）联合类型的变量，在赋值时，只能访问此联合类型的所有类型里共有的属性或方法

    交叉类型（Intersection Types）：
        TypeScript 中的一种高级类型，允许一个变量具有多种不同的类型。
        具体来说，交叉类型使用 & 运算符将多个类型组合在一起，表示这个变量必须同时满足所有类型的要求。

*/

// 联合类型： 使用类型别名定义一个联合类型，它可以是字符串或数字

let value: string | number;
value = "hello";        // value 可以是字符串
value = 42;             // value 也可以是数字


// 交叉类型:   使用类型别名定义一个交叉类型 Manager，它是 Human 和 Employee 两个类型的交叉类型

type Human = {
    name: string;
    age: number;
  };
  
type Employee = {
    company: string;
    salary: number;
};

type Manager = Human & Employee;

const manager: Manager = {
    name: "Alice",
    age: 30,
    company: "ABC Inc.",
    salary: 5000,
};