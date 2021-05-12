import { App } from "vue";

import BaseList from "./components/BaseList/main";

const components = [BaseList];

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
export { BaseList, install };
export default {
  install,
};
