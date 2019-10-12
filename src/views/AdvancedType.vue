<template>
  <div class="page">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { jim } from "@/assets/js/advancedType";

@Component
export default class AdvancedType extends Vue {
  @Provide() msg: string = "高级类型";

  mounted() {
    console.log("111")
    //交叉类型的使用
    console.log(jim)
  }
}
</script>

<style lang="scss" scoped>
</style>
