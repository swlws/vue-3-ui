# vue-3-ui

vue3 组件，基于 element-plus 的二次开发

## [API 文档](https://swlws.github.io/vue-3-ui/)

## 效果演示

文件夹`example`中可以查看 DMEO

## 构建工具-rollup

轻量的组件打包工具，比 webpack 配置更简单

### 打包

生成 umd、esm 文件，文件放置在`dist`目录

> npm run build

### 组件注册

局部注册

```js
import { UiBaseGrid } from "vue-3-ui";
```

全局注册

```js
import vue3ui from "vue-3-ui";

import vue from "vue";
const app = vue.createApp({});
app.use(vue3ui);
app.mount("#pp");
```

## 文档生成工具-docsify

> npm run doc
