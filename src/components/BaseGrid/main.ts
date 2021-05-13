import { App } from "vue";
import BaseGrid from "./index.vue";

BaseGrid.install = (app: App) => {
  app.component(BaseGrid.name, BaseGrid);
};

export default BaseGrid;
