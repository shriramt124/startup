export function getApiBase() {
  if (process.env.NEXT_PUBLIC_API_BASE) return process.env.NEXT_PUBLIC_API_BASE.replace(/\/$/, '');
  // Default to local dev
  return 'http://localhost:3000';
}

export function apiUrl(path) {
  const base = getApiBase();
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
