/*
    接口：Interface
    
        语法： interface 接口名{ }          // 接口名一般首字母大写

        在 TypeScript 中，interface 是一种用于定义对象类型的语法。
        可以用来描述对象的属性、方法和类型，从而使代码更加清晰、易于维护和重用。
        interface 只是一种类型声明，它不会在运行时创建任何对象的实例。

    
    接口和类型的区别：
        在 TypeScript 中，interface 和 type 都可以用来定义对象类型。但有区别：

        1）interface 只能用来定义对象类型，而 type 可以用来定义任何类型，包括对象类型、联合类型、交叉类型等。
        2）interface 可以被其他接口继承，而 type 可以被定义为别名或与其他类型进行交叉。
        3）interface 可以用来定义可调用对象和类的类型，而 type 不能。
        4）type 可以使用条件类型和映射类型，而 interface 不支持这些高级类型。
        
        总的来说，interface 更适合用于定义对象类型，而 type 更加灵活，可以用于定义更多类型。
        但是，选择使用 interface 还是 type 取决于具体的使用场景和个人偏好。

*/

// Stpe 1）定义接口 Person，包含属性： name、age、sayHello

interface Person {
    name: string;
    age: number;
    sayHello: () => void;
  }

// Stpe 2）定义一个对象 person，它的类型是接口 Person，包含属性：name、age、sayHello

  const person: Person = {
    name: "Alice",
    age: 30,
    sayHello: () => {
      console.log(`Hello, my name is ${person.name}`);
    },
  };

// Stpe 3）调用对象的方法 sayHello

  person.sayHello();        // 输出 "Hello, my name is Alice"