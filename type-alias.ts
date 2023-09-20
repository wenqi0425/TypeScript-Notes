/*
    类型别名 (Type Alias)
        用来给一个类型起一个新名字，常用于联合类型
    
    语法：
        type 类型名 = 类型  // 类型名一般首字母大写

    作用：
        1）简化类型书写
        2）联合类型
        3）类型别名可以在属性里引用自己

    注意：
        类型别名只是一个别名，本身并不是一个一个真正的类型，而只是一个别名，所以：
        1）不能出现在声明右侧的任何地方
        2）不能被extends和implements（自己也不能extends和implements其它类型）
        3）不能被实例化，不能被用于创建类的实例
        4）不能被用于定义泛型
        5）不能被用于错误信息

    与接口和类的区别：
        1）接口和类，都创建了一个新的类型，可以在其它任何地方使用
        2）类型别名并不创建新类型，比如错误信息就不会使用别名
 */

/* Example 类型别名
    step 1) 使用类型别名 User 来定义一个复杂的类型，它包含了多个属性。
    step 2) 定义了一个函数 getUserById，接受一个数字参数 id，并返回一个 User 类型的对象。
            在函数内部，可以使用任何方式来获取用户信息，只要最终返回的对象符合 User 类型的定义即可。
    step 3) 调用 getUserById 函数，并使用返回的对象来访问用户的属性。
 */

type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    isAdmin: boolean;
    };
    
    function getUserById(id: number): User {
    // 假设这里有一些代码，用于从数据库中获取用户信息
    return {
        id: id,
        name: "Alice",
        email: "alice@example.com",
        age: 30,
        isAdmin: false,
    };
    }
    
    const user = getUserById(123);
    console.log(user.name); // 输出 "Alice"


