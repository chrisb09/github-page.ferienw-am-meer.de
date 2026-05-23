/**
 * Dynamically determines the base path for the application.
 * Uses the environment variable injected at build time.
 */
export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

/**
 * Resolves a path relative to the application's base path.
 * Ensures the path starts with a leading slash and doesn't double-prefix.
 */
export function resolveAssetPath(path: string) {
  if (!path || !path.startsWith("/")) return path;
  
  const basePath = getBasePath();
  
  // If the path already includes the basePath, don't add it again
  if (basePath && path.startsWith(basePath)) return path;
  
  return `${basePath}${path}`;
}
