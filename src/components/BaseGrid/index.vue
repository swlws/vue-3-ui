<template>
  <article class="base-grid">
    <section>
      <data-grid
        :columns="columns"
        :data="data"
        @select="(data) => emit('select', data)"
        @select-all="(data) => emit('select-all', data)"
        @row-click="(row) => emit('row-click', row)"
        @row-dblclick="(row) => emit('row-db-click', row)"
        @sort-change="
          ({ column, prop, order }) => emit('sort-change', column, prop, order)
        "
      />
    </section>

    <footer>
      <page-ctl
        :total="total"
        v-model:pageNum="pageNum"
        v-model:pageSize="pageSize"
      />
    </footer>
  </article>
</template>

<script lang="ts">
import { PlainObject } from "@/typings/component";
import { defineComponent, watch } from "@vue/runtime-core";
import { initGrid, TLoadData } from "./buss";
import DataGrid from "./DataGrid.vue";
import PageCtl from "./PageCtl.vue";

export default defineComponent({
  name: "UiBaseGrid",
  components: { DataGrid, PageCtl },
  props: {
    loadData: Function,
    columns: {
      type: Array,
      default: () => [] as PlainObject,
    },
    hasPage: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const { total, pageNum, pageSize, data } = initGrid(
      props.loadData as TLoadData
    );

    return {
      emit,
      total,
      pageNum,
      pageSize,
      data,
    };
  },
});
</script>

<style scoped lang="scss">
.base-grid {
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #fff;

  > section {
    flex: 1;
  }

  > footer {
    text-align: right;
    padding: 8px 20px;
  }
}
</style>
