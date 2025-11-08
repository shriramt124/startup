import dbConnect from '@/lib/mongoose';
import Post from '@/models/Post';
import { json, parsePagination, serverError } from '../_utils';

export async function GET(req) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const { skip, limit, page, pageSize } = parsePagination(url);
    const category = url.searchParams.get('category');
    const search = url.searchParams.get('search');

    const filter = {};
    if (category) filter.categories = category;
    if (search) filter.$text = { $search: search };

    const [items, total] = await Promise.all([
      Post.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Post.countDocuments(filter),
    ]);

    return json({ items, page, pageSize, total });
  } catch (e) {
    return serverError(e);
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const post = await Post.create(body);
    return json(post, { status: 201 });
  } catch (e) {
    return serverError(e);
  }
}
