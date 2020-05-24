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
});
