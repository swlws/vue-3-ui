import { App } from "vue";
import BaseMenu from "./index.vue";

BaseMenu.install = (app: App) => {
  app.component(BaseMenu.name, BaseMenu);
};

export default BaseMenu;
