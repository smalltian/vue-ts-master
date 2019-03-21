/**
 * 定义函数类型
 * @param x
 * @param y
 */
function add(x: number, y: number): number {
    return x + y;
}

/**
 * function 里面的参数类型可以不写，会自动识别
 * @param x
 * @param y
 */
const myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
};

/**
 * @param name1 必要参数
 * @param name2 可选参数
 * @param name3 默认参数
 * @param othes 剩余参数
 */
const selectName = (name1: string, name2?: string, name3 = 'name3', ...othes: string[]): string => {
    if (name2) {
        return name1 + name2 + name3 + othes.join(' ');
    } else {
        return name1 + name3 + othes.join(' ');
    }

};


export {
    add,
    myAdd,
    selectName,
};
