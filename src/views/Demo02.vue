<template>
<div>
    <button @click="onClick">Click!</button>
    <div>{{count}}</div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            count: 0,
        }
    },
    mounted() {
        console.log("mounted");
    },
    methods: {
        onClick(): void {
            // window.alert(this.message);
            this.count++;
        }
    }
})
</script>

<style scoped lang="scss">

</style>
