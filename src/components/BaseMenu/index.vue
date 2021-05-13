<template>
  <article class="base-menu">
    <header>
      <main-menu v-model:checkedId="oneId" :data="firstLevelMenu" />
    </header>

    <section>
      <menu-item
        v-for="item in secondLevelMenu"
        :key="item.id"
        :data="item"
        v-model:two-id="twoId"
        v-model:three-id="threeId"
        @route-change="routeChange"
      />
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { menu, TMenuItem } from "./menu";
import MainMenu from "./Menu.vue";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  name: "UiBaseMenu",
  components: {
    MainMenu,
    MenuItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [] as TMenuItem[],
    },
    ids: {
      type: Array,
      default: () => ["", "", ""] as string[],
    },
  },
  emits: ["route-change"],
  setup(props, { emit }) {
    const {
      oneId,
      twoId,
      threeId,
      firstLevelMenu,
      secondLevelMenu,
      routeChange,
    } = menu(props.data as TMenuItem[], props.ids as string[], emit);

    return {
      oneId,
      twoId,
      threeId,
      firstLevelMenu,
      secondLevelMenu,
      routeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-menu {
  display: flex;
  border-bottom: 1px solid #333;

  > section {
    margin: 0px 30px;
    display: flex;
    align-items: center;
  }
}
</style>
