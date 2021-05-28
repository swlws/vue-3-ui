# UiBaseGrid

数据表格

# 参数

| 参数      | 说明           | 类型                                                 | 可选值 | 默认值 |
| --------- | -------------- | ---------------------------------------------------- | ------ | ------ |
| load-data | 加载数据的函数 | Function(queryParam): Promise<{total:100, list: []}> |        | []     |
| columns   | 列定义         | Array                                                |        | []     |

## 使用用例

```html
<ui-base-grid :columns="columns" :load-data="loadData" />
```

```js
const columns = [
  { type: "index" },
  {
    prop: "name",
    label: "名称",
  },
  {
    prop: "age",
    label: "年龄",
  },
  {
    prop: "sex",
    label: "性别",
  },
];

function loadData(queryParam) {
  console.log(`Query Param: ${JSON.stringify(queryParam)}`);
  const data = [
    { name: "xxx", age: 10, sex: "boy" },
    { name: "yyy", age: 11, sex: "gril" },
  ];

  return Promise.resolve({
    total: 100,
    list: data,
  });
}

const app = Vue.createApp({
  setup() {
    return {
      columns,
      loadData,
    };
  },
});
app.use(ElementPlus);
app.use(window["vue-3-ui"]);

app.mount("#app");
```
