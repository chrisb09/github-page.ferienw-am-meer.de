/**
 * Dynamically determines the base path for the application.
 * Matches the logic in next.config.ts
 */
export function getBasePath() {
  const isGithubActions = process.env.GITHUB_ACTIONS === "true";
  
  // If we're on GitHub Actions, use the repository name
  if (isGithubActions) {
    return "/github-page.ferienw-am-meer.de";
  }
  
  // Otherwise, use the preview path (or empty for local dev if desired)
  // For now, keeping it consistent with your private server requirement
  return "/ferienw-preview";
}

/**
 * Resolves a path relative to the application's base path.
 * Ensures the path starts with a leading slash and doesn't double-prefix.
 */
export function resolveAssetPath(path: string) {
  if (!path.startsWith("/")) return path;
  
  const basePath = getBasePath();
  
  if (path.startsWith(basePath)) return path;
  
  return `${basePath}${path}`;
}
