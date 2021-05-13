const data = [
  {
    id: "001000000",
    label: "001",
  },
  {
    pid: "001000000",
    id: "001001000",
    label: "001-001",
  },
  {
    pid: "001001000",
    id: "001001001",
    label: "001-001-001",
    path: "/001/001/001",
  },
  {
    pid: "001001000",
    id: "001001002",
    label: "001-001-002",
    path: "/001/001/002",
  },
  {
    pid: "001000000",
    id: "001002000",
    label: "001-002",
    path: "/001/002",
  },
  {
    id: "002000000",
    label: "002",
  },
  {
    pid: "002000000",
    id: "002001000",
    label: "002-001",
    path: "/002/001",
  },
  {
    pid: "002000000",
    id: "002002000",
    label: "002-002",
    path: "/002/002",
  },
];

const app = Vue.createApp({
  setup() {
    const routeChange = (path) => {
      console.log(`route path: ${path}`);
    };

    return {
      ids: ["001000000", "001001000", "001001002"],
      data,
      routeChange,
    };
  },
});
app.use(ElementPlus);
app.use(window["vue-3-ui"]);

app.mount("#app");
