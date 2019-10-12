<template>
  <div class="page">
    <p class="desc">主要用来创建可复用的组件</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import {
  identityT,
  myIdentityT_2,
  logging,
  getProperty,
  tHasParam,
  Generic
} from "@/assets/js/T";

@Component
export default class Home extends Vue {
  @Provide() msg: string = "范型";

  mounted() {
    //范型函数
    console.log("范型函数字符串：" + identityT<string>("朱"));
    console.log("范型函数数字：" + identityT<number>(2));

    let myIdentityT: <U>(arg: U) => U = identityT;
    let myIdentityT_1: { <T>(arg: T): T } = identityT;
    console.log(myIdentityT_1<number>(1)); //myIdentityT_1(1) 会类型推断

    // 范型接口
    console.log(typeof myIdentityT_2(1));
    console.log(tHasParam(5));

    //范型类
    let myGeneric = new Generic<number>();
    myGeneric.zeroValue = 0;
    myGeneric.add = (x, y) => {
      return x + y;
    };
    console.log(myGeneric.add(5, 5));

    logging('aaa')
    logging(123)
    // console.log(logging({ length: 10, value: 4 })); // 必须包含约束类的属性length

    // const x = { a: 1, b: 2, c: 3 };
    // console.log(getProperty(x, "b"));
  }
}
</script>

<style lang="scss" scoped>
</style>
