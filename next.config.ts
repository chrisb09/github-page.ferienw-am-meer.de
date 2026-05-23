import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = isGithubActions ? '/github-page.ferienw-am-meer.de' : '/ferienw-preview';

// If you want it to be at the root of your custom domain, set this to empty string
// basePath = ''; 

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
