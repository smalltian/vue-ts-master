<template>
    <div class="page">
        <p class="desc">主要用来创建可复用的组件</p>
    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from "vue-property-decorator";
    import {identityT, myIdentityT_2, myGN, logging, getProperty} from "@/assets/js/T";

    @Component
    export default class Home extends Vue {
        @Provide() msg: string = "aaa";

        mounted() {
            let output1 = identityT<string>("hah");
            console.log(output1);
            console.log(identityT<number>(1));

            let myIdentityT: <U>(arg: U) => U = identityT;
            let myIdentityT_1: { <T>(arg: T): T } = identityT;

            // 范型接口
            console.log(typeof myIdentityT_2(1));

            console.log(myGN.add(1, 2));

            console.log(logging("aaa"));  // 对
            // console.log(logging(123)); // 错误
            console.log(logging({length: 10, value: 4})); // 必须包含约束类的属性length

            const x = {a: 1, b: 2, c: 3};
            console.log(getProperty(x, "b"));

        }
    }
</script>

<style lang="scss" scoped>

</style>
