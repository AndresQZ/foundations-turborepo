import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/BasicElement/BasicElement.tsx",
    output: {
      file: "dist/basicElement.js",
    },
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/coreLibrary.js",
    },
  },{
    input: {
      client:"src/coreLibrary/clients.ts",
      utilWeb:"src/coreLibrary/utils.ts",
    },
    output: {
      dir: "dist",
      format: 'esm',
    }
  }
].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime"],
  plugins: [typescript()],
}));