const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SITE_URL: process.env.SITE_URL,
    HYGRAPH_GRAPHQL_URI: process.env.HYGRAPH_GRAPHQL_URI,
    ...(isDev && {
      HYGRAPH_PERMANENT_TOKEN: process.env.HYGRAPH_PERMANENT_TOKEN,
    }),
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
  ...(isProd && {
    redirects: async () => {
      return [
        {
          source: "/:path*/editor", // Match any path ending with /editor
          destination: "/:path*", // Redirect to the same path without /editor
          permanent: true, // Use a 301 redirect for a permanent move
        },
      ];
    },
  }),
};

export default nextConfig;
