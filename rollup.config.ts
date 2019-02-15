import typescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";
import liveReload from "rollup-plugin-livereload";
import resolve from "rollup-plugin-node-resolve";
import serve from "rollup-plugin-serve";

const pkg = require("./package.json");

export default {
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      name: pkg.main,
      format: "iife"
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
  plugins: [
    typescript(),
    resolve(),
    sourceMaps(),
    // liveReload(),
    // serve({
    //   open: true,
    //   contentBase: ["./demo", "dist"]
    // })
  ]
};
