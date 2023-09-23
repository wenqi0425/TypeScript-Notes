/*
    类型断言（Type Assertion）：

    类型断言可以用来告诉编译器一个变量的类型，从而避免类型检查错误。
    在 TypeScript 中，有两种类型断言的语法，效果相同：
        1. 尖括号语法：
        2. as 语法：

    注意：
        类型断言不会改变变量的实际类型，只是告诉编译器这个变量应该是什么类型。
        如果类型断言错误，就会导致运行时错误。因此，需要谨慎使用类型断言。

    类型断言的用途：
        1）将一个联合类型断言为其中一个类型
        2）将一个父类断言为更加具体的子类
        3）将任何一个类型断言为 any
        4）将 any 断言为一个具体的类型
        5）将一个具体的类型断言为另一个具体的类型
        6）将一个类型断言为联合类型中不存在的类型
        7）将一个类型断言为 never
        8）将任何一个类型断言为 unknown
        9）将一个 unknown 断言为任何一个类型
        10）将一个类型断言为 never
        11）将一个类型断言为 void
        12）将一个 void 断言为任何一个类型    
        
    注意：
        1）类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的。
        2）类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误。
        3）类型断言可能会导致运行时错误，所以如果你在使用类型断言时遇到了问题，应该仔细思考是否有更好的解决方案。
        4）类型断言不是万能的，它只能用于改变类型中不存在的属性，而不能新增属性。
       

    非空断言（Non-null Assertion）
        1）语法：变量名!，比如 str!。
        2）非空断言是一种新的类型断言，它可以用来从联合类型中排除 null 和 undefined，从而得到一个非空值。
        3）非空断言的作用是告诉编译器，这个变量不为 null 或 undefined，直接编译成 JavaScript 代码。
        4）非空断言的使用场景是当 TypeScript 无法正确判断一个变量是否为 null 或 undefined 时，比如 DOM 元素。
*/

// 这两种语法的效果是相同的，都是将 `someValue` 断言为 `string` 类型，从而可以访问 `length` 属性。
// 1) 尖括号语法：

let someValue1: any = "hello world";
let strLength1: number = (<string>someValue1).length;

// 2) as 语法：

let someValue2: any = "hello world";
let strLength2: number = (someValue2 as string).length;



// 其他 Examples

// 1) 将一个父类断言为更加具体的子类
// 例如，有一个父类 Animal，有子类 Cat 和 Dog，可以定义一个变量 animal，它的类型是 Animal 或者它的子类：

class Animal {
    name: string;
}

class Cat extends Animal {
    breed: string;
}

class Dog extends Animal {
    breed: string;
}

let animal: Animal;
animal = new Cat();     // 将 animal 断言为 Cat
animal = new Dog();     // 将 animal 断言为 Dog


// 2) 将一个联合类型断言为其中一个类型
// 例如，有一个接口 Person，包含 name 属性，可以定义一个变量 person，它的类型是 Person 或 string：

interface Person {
    name: string;
}

let person1: Person | string = "Alice";
let person2 = (person1 as unknown as Person).name;      // 将 person1 断言为 Person 类型
console.log(person2);                                   // 输出 "undefined"


// 4) 将任何一个类型断言为 其他任何一个类型

let str1: any = "maybe a string now";   
let maybe1: string = <string>str1;                      // 将 any 断言为 string
let maybe2: string = str1 as string;

let str2: string = "str";
let numStr: number = str2 as unknown as number;         // 将 string 断言为 number

let str3: string | number = "str";
let strStr: string = str3 as string;  
let strNum: number = (str3 as unknown) as number;       // 将 string 断言为 number，需要先断言为 unknown

let str4: string = "str";
let never: never = str4 as never;                       // 将 string 断言为 never

let str5: string = "str";
let unknown: unknown = str5 as unknown;                 // 将 string 断言为 unknown

let unknown1: unknown = "unknown";
let str6: string = unknown1 as string;                  // 将 unknown 断言为 string

let str7: string = "str";
let void1: void = (str7 as unknown) as void;            // 将 str8 断言为 void 类型，需要先断言为 unknown

let void2: void = undefined;
let str8: string = (void2 as unknown) as string;        // 将 void 断言为 string 类型，需要先断言为 unknown


// 非空断言（Non-null Assertion）
// 非空断言是一种新的类型断言，它可以用来从联合类型中排除 null 和 undefined，从而得到一个非空值。
// 非空断言的语法是在变量名后面加上 !，比如 str!。
// 非空断言的作用是告诉编译器，我知道这个变量不会为 null 或 undefined，你不用检查了，直接编译成 JavaScript 代码。
// 非空断言的使用场景是当 TypeScript 无法正确判断一个变量是否为 null 或 undefined 时，比如 DOM 元素。
// 例如，有一个变量 str，它的类型是 string | null，可以使用非空断言来让编译器相信 str 不会为 null：

let str9: string | null;
let len1: number = str9.length;      // 编译错误：str9 可能为 null
let len2: number = str9!.length;     // 使用非空断言，告诉编译器 str9 不会为 null

