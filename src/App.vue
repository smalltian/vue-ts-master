<template>
    <div id="app">
        <nav class="nav">
            <img alt="Vue logo" src="./assets/logo.png">
            <strong>TypeScript</strong>
        </nav>

        <div class="container">
            <div class="left">
                <MainList :list="list"></MainList>
            </div>
            <div class="right">
                <router-view/>
            </div>
        </div>
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
        @Provide() list: Object = [];
        mounted(){
            // console.log(this.$router.options.routes);
            this.list = this.$router.options.routes;

        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 15px;
    }

    body{
        background: #f7f7f7;
    }
    .nav {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        background: #eee;
        padding-left: 40px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.5);
        z-index: 99;

        img {
            width: 40px;
        }

        strong {
            font-size: 20px;
        }
    }
    #app{
        padding-top: 80px;
    }
    ul,li{
        list-style: none;
    }
    a{
        list-style: none;
        text-decoration: none;
        color: #333333;
    }
    .container{
        .left{
            position: fixed;
            left: 0;
            top: 80px;
            bottom: 0;
            width: 200px;
            background: #ffffff;
            overflow-y: auto;
        }
        .right{
            margin-left: 200px;
        }
    }
    .desc{
        color: #666;
        padding: 10px;
    }
</style>
