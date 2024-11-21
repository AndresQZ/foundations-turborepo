import typescript from '@rollup/plugin-typescript';

// Main configuration for multiple entry points
export default [
  // Client bundle
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'esm',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist',
      }),
    ],
  },
  // Internal bundle
  {
    input: 'src/internal/internal.ts',
    output: {
      file: 'dist/internal.js',
      format: 'esm',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist',
      }),
    ],
  },
];