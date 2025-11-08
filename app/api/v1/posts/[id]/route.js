import dbConnect from '@/lib/mongoose';
import Post from '@/models/Post';
import { json, notFound, serverError } from '../../_utils';
import { Types } from 'mongoose';

export async function GET(_req, { params }) {
  try {
    await dbConnect();
    const id = params.id;
    if (!Types.ObjectId.isValid(id)) return notFound('Invalid id');
    const item = await Post.findById(id).lean();
    if (!item) return notFound('Post not found');
    return json(item);
  } catch (e) {
    return serverError(e);
  }
}

export async function PATCH(req, { params }) {
  try {
    await dbConnect();
    const id = params.id;
    const data = await req.json();
    const item = await Post.findByIdAndUpdate(id, data, { new: true }).lean();
    if (!item) return notFound('Post not found');
    return json(item);
  } catch (e) {
    return serverError(e);
  }
}

export async function DELETE(_req, { params }) {
  try {
    await dbConnect();
    const id = params.id;
    const item = await Post.findByIdAndDelete(id).lean();
    if (!item) return notFound('Post not found');
    return json({ ok: true });
  } catch (e) {
    return serverError(e);
  }
}
