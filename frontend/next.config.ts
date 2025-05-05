import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: true,
  },
};

export default nextConfig;
