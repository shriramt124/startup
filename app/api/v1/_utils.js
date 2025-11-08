export function json(data, init = { status: 200 }) {
  return new Response(JSON.stringify(data), {
    status: init.status ?? 200,
    headers: { 'content-type': 'application/json', ...(init.headers || {}) },
  });
}

export function badRequest(message = 'Bad Request', details) {
  return json({ error: { code: 'BAD_REQUEST', message, details } }, { status: 400 });
}

export function notFound(message = 'Not Found') {
  return json({ error: { code: 'NOT_FOUND', message } }, { status: 404 });
}

export function serverError(e) {
  console.error(e);
  return json({ error: { code: 'INTERNAL', message: 'Internal Server Error' } }, { status: 500 });
}

export function parsePagination(url) {
  const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
  const pageSize = Math.min(100, Math.max(1, parseInt(url.searchParams.get('pageSize') || '9', 10)));
  return { page, pageSize, skip: (page - 1) * pageSize, limit: pageSize };
}
