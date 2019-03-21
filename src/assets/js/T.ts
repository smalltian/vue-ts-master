/**
 * 普通函数
 * @param arg 返回任意类型
 */

const identity = (arg: number): number => {
    return arg;
};


/**
 * 泛型
 * @param arg 返回指定类型
 */
const identityT = <T>(arg: T): T => {
    return arg;
};

/**
 * 泛型接口
 */
interface GenericIdentityFn {
    <T>(arg: T): T;
}

const identityFn = <T>(arg: T): T => {
    return arg;
};

const myIdentityT_2: GenericIdentityFn = identityFn;

/**
 * 范型类
 */
class GenericNumber<T> {
    public zeroValue: T | undefined;
    public add: ((x: T, y: T) => T) | undefined;
}

const myGN = new GenericNumber<number>();
myGN.zeroValue = 0;
myGN.add = (x, y) => {
    return x + y;
};

/**
 * 范型约束条件
 */
interface Lengthwise {
    length: number;
}

// 这个范型不再适用于任何类型
const logging = <T extends Lengthwise>(arg: T): T => {
    console.log('length约束: ' + arg.length);
    return arg;
};

/**
 * 范型和约束使用类型参数
 * @param obj
 * @param key
 */
const getProperty = (obj: T, key: K) => {
    return obj[key];
};


export {
    identityT,
    myIdentityT_2,
    myGN,
    logging,
    getProperty,
};
