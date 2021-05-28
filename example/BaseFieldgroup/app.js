const { ref } = Vue;

const data = [
  {
    key: "name",
    label: "姓名",
    type: "bi",
  },
  {
    key: "age",
    label: "年龄",
    type: "bn",
  },
  {
    key: "type",
    label: "类型",
    type: "bl",
    options: [
      {
        label: "男",
        value: "boy",
      },
      {
        label: "女",
        value: "gril",
      },
    ],
  },
];

const app = Vue.createApp({
  setup() {
    const fields = ref(data);

    const changeEvent = (v) => {
      console.log(`change: ${JSON.stringify(v)}`);
    };

    return {
      fields,
      changeEvent,
    };
  },
});
app.use(ElementPlus);
app.use(window["vue-3-ui"]);

app.mount("#app");
