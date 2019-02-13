import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";

const pkg = require("./package.json");

export default {
  input: `src/index.ts`,
  output: {
    file: pkg.main,
    name: pkg.module,
    format: "es",
    sourcemap: true
  },
  external: [],
  watch: {
    include: "src/**"
  },
  plugins: [typescript(), sourceMaps()]
};
