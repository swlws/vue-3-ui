import { name } from "../package.json";
import basicConfig from "./rollup.base.config";

export default {
  ...basicConfig,
  output: {
    name,
    file: `dist/${name}.umd.js`,
    format: "umd",
    globals: {
      vue: "Vue",
      "@vue/runtime-core": "Vue",
    },
    exports: "named",
    sourcemap: true,
  },
  external: ["vue", "@vue/runtime-core"],
};
