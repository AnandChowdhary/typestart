import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";
import resolve from "rollup-plugin-node-resolve";

const pkg = require("./package.json");

export default {
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      name: pkg.main,
      format: "umd"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  watch: {
    include: "src/**"
  },
  plugins: [typescript(), resolve(), sourceMaps()]
};
