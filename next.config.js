const { resolve } = require(`path`);
const sitemap = require(`nextjs-sitemap-generator`);

sitemap({
  baseUrl: ``,
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = {
  target: `serverless`,
  webpack: (config) => {
    config.resolve.alias[`~`] = resolve(__dirname, `src`);
    return config;
  },
};
