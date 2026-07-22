// npm runs `postbuild` in a separate process that does not load .env,
// so fall back to the configured site URL (same as next.config.mjs).
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { site } = require("./studio.config.json");

const siteUrl = process.env.BASE_URL || site.url;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "daily",
  exclude: ["/studio", "/studio/*"],
  robotsTxtOptions: {
    additionalSitemaps: [
      siteUrl + "/sitemaps/projects.xml",
      siteUrl + "/sitemaps/blogs.xml",
    ],
  },
};
