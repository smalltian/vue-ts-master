<template>
    <div class="page">

    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from "vue-property-decorator";

    @Component
    export default class Home extends Vue {
        @Provide() msg:string = "aaa"
    }
</script>

<style lang="scss" scoped>

</style>
