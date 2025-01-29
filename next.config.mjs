/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cms.muhammadluthfi.id",
        pathname: "/uploads/**",
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
