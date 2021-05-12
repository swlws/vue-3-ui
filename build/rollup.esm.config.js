import { name } from "../package.json";
import basicConfig from "./rollup.base.config";

export default {
  ...basicConfig,
  output: {
    name,
    file: `dist/${name}.esm.js`,
    format: "esm",
    sourcemap: true,
  },
};
