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

// Stpe 1）定义接口 Person，包含属性： name、age、sayHello, hobby, address
// 接口中可以包含另一个接口，比如 Address
// 只读属性 readonly
// 可选属性 ?

interface Person {
    readonly name: string;   // 可读不可改
    age: number;
    hobby?: string[];        // 可选属性
    sayHello: () => void;  
    address: Address;
  }

interface Address {
  city: string;
  street: string;
  zipCode: string;
}

// Stpe 2）定义一个对象 person，它的类型是接口 Person，包含属性：name、age、sayHello

const alice: Person = {
  name: "Alice",
  age: 30,
  sayHello: () => {
    console.log(`Hello, my name is ${alice.name}`);
  },
  address: {
    city: "北京",
    street: "朝阳区",
    zipCode: "100000"
  }
};

const bob: Person = {
  name: "Bob",
  age: 20,
  hobby: ["reading", "coding"],
  sayHello: () => {
    console.log(`Hello, my name is ${bob.name}`);
  },  
  address: {
    city: "北京",
    street: "朝阳区",
    zipCode: "100000"
  }
};


// Stpe 3）调用对象的方法 sayHello

alice.sayHello();        // 输出 "Hello, my name is Alice"

// Stpe 4）访问对象的属性
alice.name;              // 输出 "Alice"
alice.age;               // 输出 30
alice.hobby;             // 输出 undefined，因为 hobby 是可选属性，alice 没有定义 hobby
alice.address.city;      // 输出 "北京"
alice.address.street;    // 输出 "朝阳区"
alice.address.zipCode;   // 输出 "100000"

// Stpe 5）修改对象的属性
alice.name = "Bob";      // 报错，因为 name 是只读属性
alice.age = 20;
alice.hobby.push("eating");   // 报错，因为 hobby 是可选属性，alice 没有定义 hobby，也不能向她添加 hobby
alice.address.city = "上海";
alice.address.street = "浦东新区";
alice.address.zipCode = "200000";


// 接口的继承

interface Teacher extends Person {
  teach: (subject: string) => void;
}

interface Student extends Person {
  learn: (subject: string) => void;
}

// 一个接口可以继承多个接口，使用逗号分隔
interface Graduate extends Person, Teacher, Student {
  research: (topic: string) => void;
}

let graduate: Graduate = {
  name: "张三",
  age: 30,
  sayHello: () => {
    console.log(`Hello, my name is ${graduate.name}`);
  },
  hobby: ["reading", "coding"],
  address: {
    city: "北京",
    street: "朝阳区",
    zipCode: "100000"
  },
  teach: (subject: string) => {
    console.log(`I'm teaching ${subject}`);
  },
  learn: (subject: string) => {
    console.log(`I'm learning ${subject}`);
  },
  research: (topic: string) => {
    console.log(`I'm researching ${topic}`);
  }
};

console.log(graduate.name);   // "张三"
graduate.sayHello();          // "Hello, my name is 张三" 

graduate.teach('math');       // "I'm teaching math"
graduate.learn('math');       // "I'm learning math"
graduate.research('math');    // "I'm researching math"

