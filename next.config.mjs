const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SITE_URL: process.env.SITE_URL,
    HYGRAPH_GRAPHQL_URI: process.env.HYGRAPH_GRAPHQL_URI,
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
