import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ THIS is the real fix for your React JSX runtime crash
  transpilePackages: [
    "framer-motion",
    "motion",
    "next-view-transitions",
    "react-markdown",
    "next-mdx-remote",
    "@mdx-js/react"
  ],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "imagekit.io" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "cdn.dribbble.com" },
      { protocol: "https", hostname: "i.postimg.cc" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
      { protocol: "https", hostname: "assets.chanhdai.com" },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
