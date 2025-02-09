import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  env: {
    BASE_URL: isProd
      ? "https://ibrahimtarigan.vercel.app"
      : process.env.BASE_URL,
    HYGRAPH_GRAPHQL_URI: process.env.HYGRAPH_GRAPHQL_URI,
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
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "metadata" }],
    ],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
