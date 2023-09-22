/*
    对象类型：
        1）普通对象 object
        2）数组对象 array
        3）函数对象 function
        4）类对象   class
        5）元组对象 tuple
        6）枚举对象 enum

    
    对象：object
        定义对象，本质上是定义对象的属性。
        let 对象名:{属性名:属性值类型};   
        可选属性：属性名后面加？
        任意属性：属性名后面加 [propName:string]:any

    // 内置对象：ECMAScript 的内置对象
        1. Boolean、Number、String、Array、Date、RegExp、Error
        2. Math、JSON，Function、Object
        3. HTMLElement、Document、Element、NodeList、Node
        4. ...
*/


// 对象  有点像 解构赋值  let {name,age} = {name:'张三',age:18};

let obj1:object;   // 这样定义对象没有意义，因为没有定义对象的属性类型    
obj1 = {};
obj1 = [];
obj1 = function(){};

// 定义对象，本质上是定义对象的属性，包括：属性名和属性值

let obj2:{name:string};     // 定义一个对象模板
obj2 = {name:'张三'};       // obj2 = {age:18};  报错，必须要符合对象模板

// 必须要包括所有属性，否则报错

let obj3:{name:string,age:number};     
obj3 = {name:'张三',age:18};   

// 可选属性：属性名后面加？

let obj4:{name:string,age?:number};
obj4 = {name:'张三'};          // 可以不包括可选属性，但是如果包括，必须要符合类型

// 任意属性：属性名后面加[propName:string]:any

let obj5:{name:string,[propName:string]:any};  // 定义一个对象模板，包括name属性和任意属性
obj5 = {name:"张三", salary:10000, age:18};    // 可以包括任意属性

let obj6:{name:string,[propName:string]:string};  // 定义一个对象模板，包括name属性和任意属性
obj6 = {name:"张三", salary:"10000", age:"18"};    // 可以包括任意属性，但是属性值必须符合类型


