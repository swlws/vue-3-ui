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
