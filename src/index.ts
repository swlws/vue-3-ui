import { App } from "vue";

import BaseMenu from "./components/BaseMenu/main";
import BaseGrid from "./components/BaseGrid/main";
import BaseFieldGroup from "./components/BaseFieldGroup/main";

const components = [BaseMenu, BaseGrid, BaseFieldGroup];

// 全局注册
const install = (app: App) => {
  let names: string[] = [];
  components.forEach((component) => {
    app.component(component.name, component);
    names.push(component.name);
  });
  console.log(`Global Registration Component: ${names}`);
};

// 局部注册
export { BaseMenu, BaseGrid, install };
export default {
  install,
};
