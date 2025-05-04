/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.franciscocosta.dev.br",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/private-page"],
};
