import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import typescript from 'rollup-plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';
import babel from 'rollup-plugin-babel';
import analyze from 'rollup-plugin-analyzer';
// import peerDependencies from 'rollup-plugin-peer-deps-external';
// import pkg from './package.json';

const devPulugins = [
  // peerDependencies(),
  analyze(),
  resolve(),
  commonjs(),
  // typescript(),
  babel({ exclude: 'node_modules/**' }),
  esbuild({
    include: /\.ts?$/,
    exclude: /node_modules/,
    sourceMap: true,
    minify: false,
  }),
];

export default [
  {
    input: 'src/index.ts',

    external: ['ms', 'highlight.js', 'painter-kernel'],
    output: [
      {
        file: 'dist/index-es.js', // es6模块
        name: 'phl-es',
        format: 'es',
        globals: {
          'highlight.js': 'hljs',
          'painter-kernel': 'painter',
        },
      },
    ],
    plugins: devPulugins,
  },
];
