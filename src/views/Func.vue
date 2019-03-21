<template>
    <div class="page">
        <h3>
            函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。 在TypeScript里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义 行为的地方。 TypeScript为JavaScript函数添加了额外的功能，让我们可以更容易地使用。
        </h3>
    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from "vue-property-decorator";
    import {add,myAdd,selectName} from '../assets/js/Func';

    @Component
    export default class Home extends Vue {
        @Provide() msg: string = "aaa";

        mounted(){
            const z = add(10,1);
            console.log(z);
            console.log(myAdd(2,2));

            console.log(selectName("name1","name2","name3_1","name4","name5"));
        }
    }
</script>

<style lang="scss" scoped>

</style>
