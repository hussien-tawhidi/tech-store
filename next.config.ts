import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    quietDeps: true, // Suppress deprecation warnings
  },
};

export default nextConfig;
