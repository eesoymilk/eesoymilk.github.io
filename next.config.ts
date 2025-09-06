import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Set base path for GitHub Pages (using repository name)
  basePath: process.env.NODE_ENV === "production" ? "/eesoymilk.github.io" : "",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Ensure trailing slashes for proper routing
  trailingSlash: true,

  // Disable server-side features for static export
  reactStrictMode: true,

  // Skip build id for consistent builds
  generateBuildId: async () => {
    return "build-id";
  },
};

export default nextConfig;
