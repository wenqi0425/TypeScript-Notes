/*  never 类型
        never 是 TypeScript 中的一种高级类型，表示那些永远不会出现的值的类型。

        具体来说，never 类型表示
            1) 总是会抛出异常或者根本不会有返回值的函数的返回值类型，
            2) 永远不会被赋值的变量的类型。
        
        注意:
            never 类型是一种底部类型，它是所有类型的子类型，但是没有任何类型是 never 的子类型。
            因此，never 类型的值可以赋值给任何类型，但是其他类型的值不能赋值给 never 类型。
*/

/*  Example：
Step 1) 定义两个函数 throwError 和 infiniteLoop，返回值类型都是 never，因为它们要么抛出异常，要么永远不会返回。
Step 2) 定义一个变量 x，类型是 never，因为它永远不会被赋值。
Step 3) 尝试将 x 赋值给一个字符串类型的变量 y，但是不允许的，因为 never 类型不能赋值给其他类型。
*/

function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {}
  }
  
  let x: never;
  let y: string = x;    // 报错，never 类型不能赋值给其他类型