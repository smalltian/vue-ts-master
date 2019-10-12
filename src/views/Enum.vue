<template>
  <div class="page"></div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { response, Response } from "@/assets/js/Enum";

@Component
export default class Home extends Vue {
  @Provide() msg: string = "aaa";

  mounted() {
    response("respinse", Response.NO);
  }
}
</script>

<style lang="scss" scoped>
</style>
