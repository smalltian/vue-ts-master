class Animal {
    move(distanceInmeters: number = 0) {
        console.log(`Animal moved ${distanceInmeters}m`);
    }

}

/**
 * Dog为派生类，通过关键字 extends  为子类
 * Animal 为 超类
 */
class Dog extends Animal {
    brak() {
        console.log('woof!woof!');
    }
}


class Animal2 {
    public name: string;

    protected pName: string = '动物'; // 受保护的

    private subName: string = 'subName'; // 私有属性，只能在自己的类里面访问

    // 基类的构造函数
    public constructor(theName: string) {
        this.name = theName;
    }

    public move(distanceInmeters: number = 0) {
        console.log(`${this.name} moved ${distanceInmeters}m`);
    }
}

class Snake extends Animal2 {

    // snake描述 私有属性
    private color: string;

    // 实例化时必须传入 name 和 color 参数
    constructor(name: string, color: string) {
        // 继承基类的构造函数
        super(name);
        this.color = color;
    }

    // 继承基类的方法，重新方法
    public move(distanceInmeters = 5) {
        console.log(`${this.name}${this.pName}的颜色颜色是${this.color}`);
        super.move(distanceInmeters);
    }

}

class Horse extends Animal2 {
    constructor(name: string) {
        super(name);
    }

    public move(distanceInmeters = 45) {
        console.log('Horseing');
        super.move(distanceInmeters);
    }
}


/***
 * 静态属性 static定义
 */
class Grid {
    public static origin = {x: 0, y: 0};

    constructor(public scale: number) {
    }

    public calculateDistanceFromOrigin(point: { x: number, y: number }) {
        const xDist = (point.x - Grid.origin.x);
        const yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}


/***
 * 抽象类 abstract关键字定义
 */
abstract class Department {
    constructor(public name: string) {

    }

    public printName(): void {
        console.log('department Name:' + this.name);
    }

    public abstract pringMeeting(): void; // 必须在派生类中实现该方法
}

class AccountingDepartment extends Department {

    constructor(name: string) {
        super(name); // 派生类构造方法 使用super
    }

    public static generateReport(): void {
        console.log('generateing report');
    }

    public pringMeeting(): void {
        console.log('the abstrace class');
    }
}


export {
    Dog,
    Snake,
    Horse,
    Grid,
    Department,
    AccountingDepartment,
};
