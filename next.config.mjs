import createMDX from "@next/mdx";
import fs from "fs";

const isProd = process.env.NODE_ENV === "production";

const { site } = JSON.parse(fs.readFileSync("./studio.config.json", "utf-8"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  env: {
    BASE_URL: isProd ? site.url : (process.env.BASE_URL ?? site.url),
    ...(isProd && { GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID }),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired.
  // Turbopack (default in Next 16) can't serialize JS function references, so
  // remark/rehype plugins are referenced by string name with serializable options.
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
    rehypePlugins: ["rehype-highlight"],
  },
});

export default withMDX(nextConfig);
