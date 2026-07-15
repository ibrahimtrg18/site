/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL,
  generateRobotsTxt: true,
  changefreq: "daily",
  exclude: ["/studio", "/studio/*"],
  robotsTxtOptions: {
    additionalSitemaps: [
      process.env.BASE_URL + "/sitemaps/projects.xml",
      process.env.BASE_URL + "/sitemaps/blogs.xml",
    ],
  },
};
