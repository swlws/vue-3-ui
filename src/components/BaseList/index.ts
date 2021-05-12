import { App } from "vue";
import BaseList from "./main.vue";

BaseList.install = (app: App) => {
  app.component(BaseList.name, BaseList);
};

export default BaseList;
