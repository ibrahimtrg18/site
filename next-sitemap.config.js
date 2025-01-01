/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL,
  generateRobotsTxt: true,
  changefreq: "daily",
  robotsTxtOptions: {
    additionalSitemaps: [
      process.env.BASE_URL + "/server-sitemap-index.xml", // <==== Add here
    ],
  },
};
