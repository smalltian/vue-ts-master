<template>
    <div class="page">
        <MainList :list="list"></MainList>
    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from "vue-property-decorator";

    const MainList = () => import("@/components/MainList.vue");

    @Component({
        components: {
            MainList,
        },
    })
    export default class Home extends Vue {
        @Provide() list: Array = [
            {
                name: "类型",
                path: "/basetype",
                icon: "fa-file-excel-o"
            },
            {
                name:"声明变量",
                path:"/variable",
                icon:"fa-question-circle-o"
            },
            {
                name:"接口",
                path:"/interface",
                icon:"fa-server"
            },
            {
                name:"类（Class）",
                path:"/interface",
                icon:"fa-server"
            }
        ];
    }
</script>

<style lang="scss" scoped>
    .page {
        padding: 40px;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
