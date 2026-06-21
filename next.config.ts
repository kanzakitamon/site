import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "pixabay.com" },
      { protocol: "https", hostname: "**.pixabay.com" },
      // 実績（自社サービス）のOGP画像
      { protocol: "https", hostname: "kodomo.omonch.jp" },
      { protocol: "https", hostname: "futari.omonch.jp" },
      { protocol: "https", hostname: "www.rakupri.com" },
    ],
  },
};

export default nextConfig;
