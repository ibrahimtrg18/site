/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  changefreq: "daily",
  robotsTxtOptions: {
    additionalSitemaps: [
      process.env.SITE_URL + "/server-sitemap-index.xml", // <==== Add here
    ],
  },
};
