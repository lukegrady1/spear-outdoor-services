import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project repo from https://<user>.github.io/<repo>/, so
 * all routes and assets must be prefixed with `/<repo>`. The deploy workflow
 * passes that prefix via NEXT_PUBLIC_BASE_PATH; locally it's empty so `next dev`
 * still works at the root (http://localhost:3000).
 *
 * NOTE: next/image does NOT prefix image `src` with basePath on static export,
 * so a custom loader (src/image-loader.ts) applies the prefix to images.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` for GitHub Pages.
  output: "export",
  // Export each route as a folder with index.html (e.g. /services/index.html).
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // Custom loader returns the (base-prefixed) static file path as-is — Pages
    // has no image-optimization server.
    loader: "custom",
    loaderFile: "./src/image-loader.ts",
  },
};

export default nextConfig;
