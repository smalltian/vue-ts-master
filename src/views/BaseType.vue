<template>
    <div>
        <button @click="onClick">Click!</button>
        <div>{{count}}</div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {baseType, demoReturn} from "../assets/js/BaseType";

    @Component({})
    export default class Demo01 extends Vue {
        //可直接申明实例的属性
        message: string = "Hello";
        count: number = 0;

        mounted() {
            console.log("mounted");
            baseType();
            const a = demoReturn();
            console.log("aaa: " + a);
        }

        //可直接申明方法
        onClick(): void {
            // window.alert(this.message);
            this.count++;
        }
    };
</script>

<style scoped lang="scss">

</style>
