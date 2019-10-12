<template>
  <div class="page"></div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { HasLetterOnlyString } from "@/assets/js/Module";

@Component
export default class AdvancedType extends Vue {
  @Provide() msg: string = "测试";

  mounted() {
    let letterOnlyString = new HasLetterOnlyString();
    console.log(letterOnlyString.isAcceptable("adc"));
  }
}
</script>

<style lang="scss" scoped>
</style>
