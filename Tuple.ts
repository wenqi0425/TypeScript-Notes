/*元组（Tuple）
    TypeScript 中的一种特殊数组类型，可存储多个不同类型的元素，元素的类型可以不同。
    元组的类型是固定的，一旦定义后，不能再添加或删除元素。如果尝试添加或删除元素，会导致编译错误。
    元组的元素可以是不同类型的，但需要按照定义的顺序进行赋值。
    在访问元组的元素时，使用下标索引，下标从 `0` 开始。

*/

// 数组的写法

let arr01:number[] = [1,2,3];
let arr02:Array<number> = [1,2,3];
let sarr:string[] = ['a','b','c'];

// 元组的写法和操作

let tuple: [string, number] = ["张三", 18];
console.log(tuple[0]);      // 输出："张三"
console.log(tuple[1]);      // 输出：18

// 重新赋值即可修改元组的值
tuple = ["李四", 28];
console.log(tuple[0]);      // 输出："李四"
console.log(tuple[1]);      // 输出：28


// 在 TypeScript 中，变量必须先声明后使用，并且在使用之前必须对其进行初始化。

let tp: [string, number] =["",0];
tp[0] = "张三";     
tp[1] = 18;         

// 元组不能用 push 方法添加元素，也不能用 pop 方法删除元素，否则会报错。
// 元组也不能用 concat 方法连接两个元组，否则会报错。
// 如果需要向元组中添加元素，可以使用扩展运算符 ... 来连接两个数组。

let tuple1: [string, number] = ["张三", 18];
let tuple2: [boolean, string] = [true, "男"];

// let tuple3: [string, number, boolean, string] = tuple1.concat(tuple2);    // conccat 方法会报错

// 扩展运算符
let tuple3: [string, number, boolean, string] = [...tuple1, ...tuple2];

console.log(tuple3);    // 输出：["张三", 18, true, "男"]