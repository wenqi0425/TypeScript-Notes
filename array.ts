/*
    对象类型：
        1）普通对象 object
        2）数组对象 array
        3）函数对象 function
        4）类对象   class
        5）元组对象 tuple
        6）枚举对象 enum
    
    array       数组类型
    tuple       元组类型
    enum        枚举类型
*/

// 数组，极少用 any 和 unknown，因为数组要循环遍历，any 和 unknown 会影响性能
let arr1:number[] = [1,2,3];
let arr2:Array<number> = [1,2,3];

let arr3:string[] = ['hello','world'];
let arr4:Array<string> = ['hello','world'];

let arr5:any[] = [1,'hello',true];
let arr6:Array<any> = [1,'hello',true,[1,2,3]];

// 多维数组
let arr7:number[][] = [[1,2,3],[4,5,6],[7,8,9]];        // 二维数组
let arr8:number[][][] = [[[1,2,3],[4,5,6],[7,8,9]]];    // 三维数组