/*  Symbol 类型

        symbol 是 ECMAScript 6 中新增的一种基本数据类型，表示独一无二的值。
        每个 symbol 值都是唯一的，可以用作对象属性的键。
        symbol 类型的值可以通过 Symbol() 函数创建
    
    注意：
        1）symbol 类型的值不能与其他类型的值进行运算，否则会报错。
        2）symbol 类型的值是唯一的，即使两个 symbol 类型的值的描述相同，它们也是不相等的。
*/

// 使用 Symbol() 函数创建了两个 symbol 类型的值 sym1 和 sym2，其中 sym2 的描述为 "key"。
let sym1 = Symbol();
let sym2 = Symbol("key");  


// symbol 类型的值可以用作对象属性的键
// 定义对象 objSymbol，使用 symbol 类型的值 sym1 和 sym2 作为属性的键，分别赋值为 "value1" 和 "value2"。
// 通过 obj[sym1] 和 obj[sym2] 访问这些属性的值，分别输出了 "value1" 和 "value2"。

let objSymbol = {
    [sym1]: "value1",
    [sym2]: "value2"
  };
  
  console.log(objSymbol[sym1]);  // 输出 "value1"
  console.log(objSymbol[sym2]);  // 输出 "value2"

// symbol 类型的值是唯一的，即使两个 symbol 类型的值的描述相同，它们也是不相等的。

let sym3 = Symbol("key");
let sym4 = Symbol("key");

console.log(sym3 === sym4);     // 输出 false