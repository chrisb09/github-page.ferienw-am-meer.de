import placeholders from "./placeholders.json";

/**
 * Dynamically determines the base path for the application.
 * Uses the environment variable injected at build time.
 */
export function getBasePath() {
  // During build, Next.js replaces process.env.NEXT_PUBLIC_BASE_PATH with the string value.
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
  if (basePath && (path === basePath || path.startsWith(basePath + "/"))) {
    return path;
  }
  
  return `${basePath}${path}`;
}

/**
 * Returns a blur data URL for a given image path if it exists in the pre-generated placeholders.
 */
export function getBlurPlaceholder(path: string) {
  if (!path) return undefined;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return (placeholders as Record<string, string>)[cleanPath] || undefined;
}
