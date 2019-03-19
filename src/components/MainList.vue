<template>
    <ul class="list">
        <li v-for="(item,index) in list" :key="index">
            <router-link :to="item.path">
                <i class="fa" :class="item.icon"></i>
                <span>{{item.name}}</span>
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";


    @Component
    export default class Home extends Vue {
        //父组件参数
        @Prop(Array) readonly list!: Array

        mounted(){
            console.log(JSON.stringify(this.list));
        }
    }
</script>

<style lang="scss" scoped>
    .list{
        display: flex;
        li{
            width: 310px;
            height: 200px;
            background: #ffffff;
            margin: 0 20px 20px 20px;
            border-radius: 4px;
            transition: all .5s linear;
            cursor: pointer;
            a{
                display: flex;
                width: 100%;
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                box-shadow: 0 0 3px rgba(0,0,0,0.1);
                i{
                    color: royalblue;
                    font-size: 60px;
                }
                span{
                    font-size: 20px;
                    color: #333333;
                    font-weight: bold;
                    margin-top: 10px;
                }
            }
            &:hover{
                transform: translateY(15px);
                span{
                    color: royalblue;
                }
            }
        }
    }
</style>

