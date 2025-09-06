import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Set base path for GitHub Pages (using repository name)
  // Only apply basePath when building for GitHub Pages deployment
  basePath: "/eesoymilk.github.io",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
