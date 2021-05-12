import { App } from "vue";

import BaseList from "./BaseList";

const components = [BaseList];

// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

// 局部注册
export { BaseList, install };
export default {
  install,
};
