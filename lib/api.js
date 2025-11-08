export function getApiBase() {
  if (process.env.NEXT_PUBLIC_API_BASE) {
    return process.env.NEXT_PUBLIC_API_BASE.replace(/\/$/, '');
  }
  // Default to hosted backend if no env provided
  return 'https://e-fic-backend.vercel.app';
}

export function apiUrl(path) {
  const base = getApiBase();
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
