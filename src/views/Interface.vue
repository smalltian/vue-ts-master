<template>
    <div class="page">

    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from "vue-property-decorator";

    import {printLabel, createSquare, MySearch,myStr} from "@/assets/js/Interface";

    @Component
    export default class Home extends Vue {
        @Provide() msg: string = "aaa";

        mounted() {
            let obj = {size: 10, label: "haha"};
            printLabel(obj);

            let mySquare = createSquare({color: "blue"});
            console.log("myquare: " + JSON.stringify(mySquare));

            let mySearch = MySearch("advvv", "d");
            console.log("search:" + mySearch);

            console.log("myStr: "+myStr);
        }
    }
</script>

<style lang="scss" scoped>

</style>
