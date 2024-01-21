const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SITE_URL: process.env.SITE_URL,
    HYGRAPH_GRAPHQL_URI: process.env.HYGRAPH_GRAPHQL_URI,
    GOOGLE_ANALYTICS_ID: isProd ?? process.env.GOOGLE_ANALYTICS_ID,
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
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
