<template>
    <div class="page">

    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from "vue-property-decorator";

    import {Dog, Snake, Horse, Grid, Department, AccountingDepartment} from "@/assets/js/MyClass";

    @Component
    export default class Home extends Vue {
        @Provide() msg: string = "aaa";

        mounted() {
            const dog = new Dog();
            dog.brak();
            dog.move(10);

            const snake = new Snake("snake", "block");
            const horse = new Horse("horse");
            // console.log("aa: "+snake.pName);
            snake.move();
            horse.move(20);
            // console.log(snake.subName); //sunName是基类的私有属性，子类不能放访问

            // 静态属性调用
            let grid1 = new Grid(1.0);
            let grid2 = new Grid(0.5);
            console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
            console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

            // 抽象类
            // const accountingDepartment = new AccountingDepartment();

            let department: Department; //允许创建一个对象抽象类的引用
            // let department = new Department(); // 不能创建一个抽象类的实例
            department = new AccountingDepartment("haha"); //允许一个抽象子类进行实例化
            department.printName(); // 子类调用父类的方法
            department.pringMeeting();
            // department.generateReport(); // 方法在抽象类中不存在


        }
    }
</script>

<style lang="scss" scoped>

</style>
