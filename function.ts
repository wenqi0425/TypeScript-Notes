/*
    对象类型：
        1）普通对象 object
        2）数组对象 array
        3）函数对象 function
        4）类对象   class
        5）元组对象 tuple
        6）枚举对象 enum


    函数：
        let 函数名:(参数1:类型,参数2:类型,...)=>返回值类型 = function(参数1,参数2,...):返回值类型{ }

        函数的类型验证：
        function 函数名 (参数1:类型,参数2:类型,...)：返回值类型{
            return 返回值;
        }
    
    类型别名：
        type 类型名 = 类型  // 类型名一般首字母大写

*/

// 函数
let fnN:() => number;  // 函数返回值是number类型

//let fnV:() => void;    // 函数返回值是void类型,啥也没限定，不推荐
let fnV:(a:number,b:number) => void;    
fnV = function(a,b){
    console.log(a+b);
}

let fnAdd:(a:number,b:number)=>number = 
    function(a,b){
        return a+b;
    }  

// 以上是定义一个在对象中使用的函数的方法
let obj:{
    name:string,
    fn:(a:number,b:number)=>number
}

// 以下是定义一个单独的函数的方法，入口参数是number类型，返回值是number类型
function add(a:number,b:number):number{
    return a+b;
}

let add2:(a:number,b:number)=>number = (a,b)=>{return a+b;}         // 箭头函数
let add3:(a:number,b:number)=>number = function(a,b){return a+b;}   // 普通函数



// 类型别名
type Num =(a:number,b:number)=>number;  // 定义一个类型别名，类型别名一般首字母大写
let add4:Num = (a,b)=>{return a+b;}         // 使用类型别名，类型推论
let add5:Num = function(a,b){return a+b;}   // 使用类型别名，类型推论
console.log(add4(1,2),add5(3,4));



// 函数参数
// 1）可选参数：参数名后面加? 
// 不确定是否需要传递某个参数时，可以将其定义为可选参数。在调用函数时选择性地传递它。
// 可选参数必须在必选参数后面，否则报错。

function fn2(str: string, num?: number): void {
    if (num === undefined) {
      num = 0;
    }
    console.log(str.repeat(num));
  }
  
  fn2("hello", 3);          // 输出 "hellohellohello"
  fn2("world");             // 输出 ""


// 2) 默认参数：参数名后面加=值
// 如要在函数中使用默认值，也可将参数定义为可选参数并设置默认值。
// 当不传递参数或传递的参数为undefined时，使用默认参数。

function fn3(str: string, num: number = 0): void {
    console.log(str.repeat(num));
  }
  
  fn3("hello", 3);      // 输出 "hellohellohello"
  fn3("world");         // 输出 ""


// 剩余参数：参数名前面加...
// 用于获取函数调用时传递的所有参数，可以将剩余参数定义为一个数组。

function fn4(str: string, ...nums: number[]): void {
    console.log(str, nums);
  }
  
  fn4("hello", 1, 2, 3);    // 输出 "hello [1, 2, 3]"
  fn4("world");             // 输出 "world []"


// 函数重载
function fn5(a: number, b: number): number;
function fn5(a: string, b: string): string;

function fn5(a: any, b: any): any {
if (typeof a === "number" && typeof b === "number") {
    return a + b;
} else if (typeof a === "string" && typeof b === "string") {
    return a + b;
} else {
    throw new Error("Invalid arguments");
}
}

console.log(fn5(1, 2));                 // 输出 3
console.log(fn5("hello", "world"));     // 输出 "helloworld"
console.log(fn5(1, "hello"));           // 抛出错误 "Invalid arguments"