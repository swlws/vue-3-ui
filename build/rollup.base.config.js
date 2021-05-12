import commonjs from "rollup-plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import babel from "rollup-plugin-babel";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

// rollup-plugin-postcss

// rollup配置文件
// https://www.rollupjs.com/guide/command-line-reference
export default {
  input: "src/index.ts",
  plugins: [
    terser(),
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
    commonjs({
      include: ["node_modules/**", "node_modules/**/*"],
    }),
    nodeResolve(),
    typescript(),
    vue(),
    scss(),
  ],
};
