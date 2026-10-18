import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export — `next build` emits a self-contained `out/` folder
  // deployable to any static host (Cloudflare Pages, GitHub Pages, Netlify…).
  output: "export",
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
