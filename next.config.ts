import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: [
  //     "quick-live.eu-central-1.linodeobjects.com", // ✅ أضف هذا
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ✅ يقبل أي دومين https
      },
    ],
  },
};

export default nextConfig;
