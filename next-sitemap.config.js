// npm runs `postbuild` in a separate process that does not load .env,
// so fall back to the production URL (same as next.config.mjs).
const siteUrl = process.env.BASE_URL || "https://ibrahimtarigan.vercel.app";

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
