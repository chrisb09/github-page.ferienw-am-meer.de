import type { NextConfig } from "next";

// Priority: 1. Environment Variable, 2. GitHub Actions detection, 3. Default preview path
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || 
                 (process.env.GITHUB_ACTIONS === "true" ? '/github-page.ferienw-am-meer.de' : '/ferienw-preview');

console.log(`Building with basePath: ${basePath}`);

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure the variable is available to both server and client
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
