<template>
  <div class="base-list">
    <header>BaseList</header>
    <p>a: {{ a }}</p>
    <ol>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";

export default defineComponent({
  name: "BaseList",
  setup() {
    const list = reactive([11, 22, 33, 44, 55, 66, 77, 88]);
    const obj: { a?: string } = {};
    let a = obj?.a;

    return {
      list,
      a,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-list {
  border: 1px solid #e8e8e8;
  > ol {
    padding: 10px;

    > li {
      color: #333;
      border: 1px solid #333;
      padding: 10px;
      margin: 10px;
      border-radius: 5px;
    }
  }
}
</style>
