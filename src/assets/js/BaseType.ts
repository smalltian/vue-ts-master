/**数据类型**/


const baseType = () => {
    // boolean
    const isDone: boolean = false;
    console.log('boolean: ' + isDone);
    // number
    const isNum: number = 6;
    console.log('number:' + isNum);
    // string
    const name: string = 'zhujuntian';
    console.log('string:' + name);
    const sententce: string = 'hello,my name is ' + name + '.\n\n' + 'i am a';
    console.log(sententce);

    // 数组
    const list: number[] = [1, 2, 3];
    console.log('arr:' + list);

    const list2: Array<number> = [1, 2, 3];
    console.log(list2);

    // 元祖
    let x: [string, number];
    x = ['hello', 10]; // Ok
    // @ts-ignore
    // x = [10, 'hello']; // Error
    console.log(x[0]);

    // 枚举
    enum Color {Red, Green, Blue = 4}

    const c: Color = Color.Green;
    console.log(c);
    const colorName: string = Color[2];
    console.log(colorName); // 如果为2 打印 undefeined，因为不存在，为 0 1 4则可以打印

    // any
    const notSure: any = 4;
    console.log(notSure);
    const notSure2: any = 'sss';
    console.log(notSure2);

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100 * i);
    }

};


// void函数，函数没有指定返回值的时候可以写 void
const warnUser = (): void => {
    console.log('void函数类型。没有返回值');
};

// 返回 number
const demoReturn = (): number => {
    return 1;
};

export {
    baseType,
    warnUser,
    demoReturn,
};
