import withExportOptimizeImages from 'next-export-optimize-images'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // To enable static export for GitHub Pages
  images: {
    loader: 'custom', // We will do the loading ourselves
    loaderFile: './app/image-loader.ts', // ...use this file
  },
};

export default withExportOptimizeImages(nextConfig)
