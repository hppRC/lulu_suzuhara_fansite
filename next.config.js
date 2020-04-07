const { resolve } = require(`path`);
const sitemap = require(`nextjs-sitemap-generator`);
const withPlugins = require(`next-compose-plugins`);
const optimizedImages = require(`next-optimized-images`);

sitemap({
  baseUrl: ``,
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = withPlugins([[optimizedImages]], {
  target: `serverless`,
  webpack: (config) => {
    config.resolve.alias.src = resolve(__dirname, `src`);
    config.resolve.alias.assets = resolve(__dirname, `assets`);
    return config;
  },
});
