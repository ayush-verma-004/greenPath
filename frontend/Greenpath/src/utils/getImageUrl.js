export const getImageUrl = (path) => {
  if (!path) return "/placeholder-image.jpg"; // Handle empty path
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("blob:")) {
    return path;
  }
  const baseURL = import.meta.env.VITE_API_URL || "https://greenpath-backend-99uf.onrender.com";
  // remove any duplicate leading slashes if baseURL has trailing slash
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  const formattedBase = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
  return `${formattedBase}${formattedPath}`;
};
