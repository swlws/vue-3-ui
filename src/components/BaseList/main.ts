import { App } from "vue";
import BaseList from "./index.vue";

BaseList.install = (app: App) => {
  app.component(BaseList.name, BaseList);
};

export default BaseList;
