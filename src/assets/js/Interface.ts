/**
 * 定义一个接口
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。
 * 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */


// 1.一般模式
interface LabelLedValue {
    label: string;
}

/**
 * 定义一个方法
 * @param labelLedValue 只会检查属性是否存在和类型是否匹配
 */
const printLabel = (labelLedValue: LabelLedValue) => {
    console.log('[interface: ]' + labelLedValue.label);
};


// 2.可选属性
interface SquareConfig {
    color?: string;
    width?: number; // 可选
    // readonly x: number; // 只读
    [propName: string]: any; // 其他任何属性
}


const createSquare = (config: SquareConfig): { color: string, area: number } => {
    const newSquare = {color: 'white', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
};

// 3.函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let MySearch: SearchFunc;
MySearch = (src: string, sub: string): boolean => {
    const result = src.search(sub);
    return result > -1;
};

// 4.索引类型
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['A', 'B'];

const myStr: string = myArray[0];

//类类型
interface ClockInterface {
    currentTime: Date;

    // @ts-ignore
    setTime(d: Date);
}

class Clock implements ClockInterface {
    // @ts-ignore
    private currentTime: Date | undefined;

    constructor(h: number, m: number) {

    }

    public setTime(d: Date) {
        this.currentTime = d;
    }
}

export {
    printLabel,
    createSquare,
    MySearch,
    myStr,
};
