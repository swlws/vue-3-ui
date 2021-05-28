import { App } from "vue";
import BaseFieldGroup from "./index.vue";

BaseFieldGroup.install = (app: App) => {
  app.component(BaseFieldGroup.name, BaseFieldGroup);
};

export default BaseFieldGroup;
