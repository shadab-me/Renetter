// Asset path utility
export const getImagePath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return new URL(`/src/assets/img/${cleanPath}`, import.meta.url).href;
};

export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return new URL(`/src/assets/${cleanPath}`, import.meta.url).href;
};
