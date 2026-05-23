import type { NextConfig } from "next";

// This logic must match lib/utils.ts
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions ? '/github-page.ferienw-am-meer.de' : '/ferienw-preview';

console.log(`Building with basePath: ${basePath}`);

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
