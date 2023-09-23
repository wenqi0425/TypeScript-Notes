/*
    变量声明
        let 变量名：类型 = 值；     -->  tsc index.ts 生成index.js 
        let 数组名：类型[] = [值1,值2,值3]；
    
    变量类型：
        string      字符串类型
        number      数字类型
        boolean     布尔类型
        Date        日期类型
        RegExp      正则表达式类型
        Error       错误类型
        Symbol      符号类型 （ES6新增）

        undefined   未定义类型
        null        空类型  (undefined 和 null 是任意类型的子类型，可以赋值给任意类型)
        NaN         非数字类型

        any         任意类型（不推荐）
        unknown     未知类型（推荐）
        
        字面量       限制变量的值就是该字面量的值  
                    let flag:1|"hello"|true;  // flag只能是1、hello、true三个值中的一个     
*/


// 变量声明

let str:string = 'hello world';
let num:number = 123;
let bool:boolean = true;
let date:Date = new Date();
let reg:RegExp = /[0-9]/;
let e:Error = new Error('Error message');

// Nodelist是一个类数组，不是数组类型，不能使用数组的方法

let divs:NodeList = document.querySelectorAll('div');  

// undefined 和 null 是任意类型的子类型，可以赋值给任意类型

let astring:string = null;        // 这个报错可以忽略，因为并没有开启 strictNullChecks 选项                     
let bstring:string = undefined;           

let u:undefined = undefined;   // 适用于任何类型
let n:null = null;             // 适用于任何类型


/* strictNullChecks：开启严格的空值检查，可以避免很多空值的错误
   如果开启了 strictNullChecks 选项，就不能将 undefined 或 null 赋值给非空类型的变量，否则会报错。
   TypeScript 的配置文件 `tsconfig.json` 中可查看是否开启了 `strictNullChecks` 选项。
   如果该选项的值为 `true`，则表示开启了该选项，
*/


// NaN是number类型，当算数运算得不出结果时，返回NaN

let naN:number = NaN;          


// any类型 (不推荐)   
// 可以赋值为任意类型。尽量不要使用any类型，只要使用了any类型，ts就不会对这个变量进行类型检测

let b;  // 声明变量不赋值，类型为any

// any类型可以赋值为任意类型，最后一个覆盖前面的
let a:any=10; 
a='hello';
a=true;
a=function(){};
console.log(a);   // function () { } 


// unknown类型  
// 未知类型，不可以直接赋值给其他变量，但是可以赋值给any类型
// unknown类型不能进行操作，但是可以赋值给any类型，只有在确定类型后才能进行操作。

let c:unknown=10;   
c='hello';
c=true;

// 操作unknown类型前，要先判断类型

if(typeof c === 'number'){
    console.log(c*5);
}else if(typeof c === 'string'){
    console.log(c.length);
}
else if(typeof c === 'boolean'){
    console.log(c);   // true, Boolean类型不支持运算操作，c*5会报错
}
// else{
//     console.log(c*5)   // 这里会报错，因为c是unknown类型，不能进行运算操作，必须要先判断类型
// }



/* 字面量  Literal Types
   字面量是 TypeScript 中的一种类型，表示一个具体的值。
   可以使用字面量，来定义变量的类型，从而限制变量的取值。

   联合类型（Union Types）：
   TypeScript 中的一种高级类型，允许一个变量具有多种不同的类型。
*/

let flag:1 | "hello" | true;              // 字面量： flag只能是1、hello、true三个值中的一个
let typeValue: string | number | boolean;     // 联合类型： value 可以是字符串或数字或布尔值