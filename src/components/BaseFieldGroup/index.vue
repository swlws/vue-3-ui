<template>
  <article class="base-field-group">
    <field-wrapper v-for="field in fields" :key="field.key" :field="field" />
  </article>
</template>

<script lang="ts">
import { defineComponent, watch } from "@vue/runtime-core";
import FieldWrapper from "./FieldWrapper.vue";
import { collectFieldValue, TField } from "./buss";
import { debounce } from "@/lib/tool";

export default defineComponent({
  name: "UiBaseFieldGroup",
  components: { FieldWrapper },
  props: {
    fields: {
      type: Array,
      default: () => [] as TField[],
    },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const changeEvent = debounce(function () {
      const res = collectFieldValue(props.fields as TField[]);
      emit("change", res);
    });

    watch(() => props.fields, changeEvent, {
      deep: true,
    });
  },
});
</script>

<style lang="scss" scoped>
.base-field-group {
  display: flex;
  flex-wrap: wrap;

  > section {
    width: 200px;
    margin: 0px 10px;
  }
}
</style>
