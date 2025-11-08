import dbConnect from '@/lib/mongoose';
import Post from '@/models/Post';
import { json, notFound, serverError } from '../../../_utils';

export async function GET(_req, { params }) {
  try {
    await dbConnect();
    const post = await Post.findOne({ slug: params.slug }).lean();
    if (!post) return notFound('Post not found');
    return json(post);
  } catch (e) {
    return serverError(e);
  }
}
