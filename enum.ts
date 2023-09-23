/*
枚举 enum
    一种数据类型，用于定义一组有名字的常量。
    在 TypeScript 中，枚举使用 enum 关键字来定义。

    枚举的每个常量都有一个名称和一个值。名称和值之间使用冒号 : 分隔，每个常量使用逗号 , 分隔。
    枚举的名称一般首字母大写，常量名称一般全大写。
    枚举的值可以是数字或字符串，
        如果没有赋值，那么枚举中默认第一个数据是0，后面的数据会自动递增。
        枚举的值也可以是字符串，此时枚举的值不会自动递增。
    枚举的值可以是表达式，但是表达式的值必须是常量。

*/

enum Color {
    Red,
    Green,
    Blue
}

let myColor: Color = Color.Green;
console.log(myColor);    // 输出：1


enum Gender {
    Man,
    Woman
}   

console.log(Gender["Man"]);     // 输出：0


// 如果枚举的值是数字，则枚举的值会自动递增。
enum Num {
    A = 1,
    B,
    C
}

console.log(Num["B"]);          // 输出：2
console.log(Num[2]);            // 输出：B


// 枚举的值由它上一位决定
enum Dir {
    Up = 1,
    Down = 8,
    Left,   // 9
    Right   // 10
}

// 允许自定义枚举的值，而不是使用默认值
enum ErrorCode {
    NotFound = 404,
    ServerError = 500,
    ServiceUnavailable = 503
}

console.log(ErrorCode["NotFound"]);     // 输出：404
console.log(ErrorCode.NotFound);        // 输出：404

// 允许枚举的两个值相同，取值时会取最后一个值 
enum Week {
    Sunday = 3,
    Monday = 1,
    Tuesday,        
    Wednesday,      // 3
    Thursday,
    Friday,
    Saturday
}

console.log(Week.Sunday);        // 输出：3
console.log(Week.Wednesday);     // 输出：3
console.log(Week[3]);            // 输出：Wednesday，最后一个值为3的枚举名称，后面的值覆盖前面的