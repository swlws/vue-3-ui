<template>
  <el-input v-model="field.value" :placeholder="placeholder"></el-input>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import { TField } from "../buss";

export default defineComponent({
  props: {
    field: {
      type: Object,
      default: () => ({} as TField),
    },
  },
  setup(props) {
    const placeholder = computed(() => {
      const field = props.field as TField;
      return `${field.label}`;
    });

    return {
      placeholder,
    };
  },
});
</script>
