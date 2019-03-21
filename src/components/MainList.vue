<template>
    <ul class="list">
        <li v-for="(item,index) in list" :key="index">
            <router-link :to="item.path">
                <i class="fa" :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";


    @Component
    export default class Home extends Vue {
        //父组件参数
        @Prop(Array) readonly list!: Array;

        mounted() {
            console.log(JSON.stringify(this.list));
        }
    }
</script>

<style lang="scss" scoped>
    .list {
        display: flex;
        flex-direction: column;
        padding-top: 10px;

        li {
            width: 100%;
            height: 60px;
            border-radius: 4px;
            transition: all .5s linear;
            cursor: pointer;
            display: block;

            a {
                height: 100%;
                display: flex;
                align-items: center;
                padding-left: 30px;

                i {
                    color: #333;
                    margin-right: 10px;
                    font-size: 16px;
                }

                span {
                    color: #333;
                    font-size: 14px;
                }

                &.router-link-exact-active {
                    i {
                        color: mediumslateblue;
                    }

                    span {
                        color: mediumslateblue;
                    }

                }
                &:hover{
                    background: rgba(0,0,0,0.3);
                }
            }

        }
    }
</style>

