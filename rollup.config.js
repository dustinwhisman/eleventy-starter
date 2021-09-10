import fs from 'fs';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';

const files = fs.readdirSync('src/assets/js').filter((file) => file.endsWith('.js') || file.endsWith('.mjs'));
const configs = [];

files.forEach((file) => {
  // modern bundles
  configs.push({
    input: `src/assets/js/${file}`,
    output: {
      file: `dist/assets/js/bundled/${file}`,
      format: 'iife',
    },
    plugins: [
      terser(),
    ],
  });

  // legacy bundles
  configs.push({
    input: `src/assets/js/${file}`,
    output: {
      file: `dist/assets/js/legacy/${file}`.replace('.mjs', '.js'),
      format: 'iife',
    },
    plugins: [
      babel({
        presets: ['@babel/preset-env'],
        babelHelpers: 'bundled',
      }),
      terser(),
    ],
  });
});

export default configs;
