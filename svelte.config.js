// svelte options exported for svelte-vscode

const { preprocess: tsPreprocess, createEnv, readConfigFile } = require('@pyoner/svelte-ts-preprocess');
const sveltePreprocess = require('svelte-preprocess');
const autoprefixerPreprocess = require('autoprefixer');

const env = createEnv();
const compilerOptions = readConfigFile(env);
const preprocessOptions = {
  env,
  compilerOptions: {
    ...compilerOptions,
    allowNonTsExtensions: true
  },
  scss: {
    includePaths: ['src']
  }
};

const makePreprocess = (preprocessOptions, head, ...preprocesses) =>
  preprocesses.length === 0 ? head(preprocessOptions) : makePreprocess(head(preprocessOptions), ...preprocesses);

const preprocess = makePreprocess(preprocessOptions, tsPreprocess, autoprefixerPreprocess, sveltePreprocess);

module.exports = {
  dev: process.env.NODE_ENV !== 'development',
  preprocess
};

// sveltePreprocess({
//   scss: {
//     includePaths: ['src']
//   },
//   postcss: {
//     plugins: [require('autoprefixer')]
//   }
// });
