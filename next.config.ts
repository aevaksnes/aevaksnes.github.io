import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // To enable static export for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages does not support dynamic image optimization, so we disable it
  },
};

export default nextConfig;
