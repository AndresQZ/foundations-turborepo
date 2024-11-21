import typescript from "@rollup/plugin-typescript";
import { terser } from 'rollup-plugin-terser';

import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
   input: "src/foundations-main.js",
   output: [
    //UMD
    {
      file: "dist/foundation.umd.js",
      format: 'umd',
      name: 'foundationUMD',
      sourcemap: true,
    },
    // IIFE 
    {
      file: 'dist/foundations-iife.js',
      format: 'iife',
      name: 'foundationIIFE', // Global variable name for IIFE
      sourcemap: true,
    },

    // ESM and CJS
    {
      file: 'dist/foundations-esm.js',
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
    {
      file: 'dist/foundations-cjs.js',
      format: "cjs",
      exports: "named",
      sourcemap: true,
    }
   ],
  plugins: [
    nodeResolve(),
    terser() // Minify the output
  ]

}