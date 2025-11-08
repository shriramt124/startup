import dbConnect from '@/lib/mongoose';
import Project from '@/models/Project';
import { json, parsePagination, serverError } from '../_utils';

export async function GET(req) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const { skip, limit, page, pageSize } = parsePagination(url);
    const [items, total] = await Promise.all([
      Project.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Project.countDocuments({}),
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
    const item = await Project.create(body);
    return json(item, { status: 201 });
  } catch (e) {
    return serverError(e);
  }
}
