import dotenv from 'dotenv';
import fs from 'fs';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';

dotenv.config();

const replaceOptions = {
  values: {
    'process.env.FIREBASE_API_KEY': process.env.FIREBASE_API_KEY,
    'process.env.FIREBASE_PROJECT_ID': process.env.FIREBASE_PROJECT_ID,
    'process.env.FIREBASE_MESSAGING_SENDER_ID': process.env.FIREBASE_MESSAGING_SENDER_ID,
    'process.env.FIREBASE_APP_ID': process.env.FIREBASE_APP_ID,
  },
  preventAssignment: true,
  delimiters: ['', ''],
};

const files = fs.readdirSync('src/assets/js').filter((file) => file.endsWith('.js') || file.endsWith('.mjs'));
const configs = [];

if (!files.length) {
  configs.push({
    input: 'src/assets/js/.gitkeep',
    output: {
      dir: 'dist/assets/js',
    },
  });
}

files.forEach((file) => {
  // modern bundles
  configs.push({
    input: `src/assets/js/${file}`,
    output: {
      file: `dist/assets/js/bundled/${file}`,
      format: 'iife',
    },
    plugins: [
      nodeResolve(),
      replace(replaceOptions),
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
      nodeResolve(),
      replace(replaceOptions),
      babel({
        presets: ['@babel/preset-env'],
        babelHelpers: 'bundled',
      }),
      terser(),
    ],
  });
});

export default configs;
