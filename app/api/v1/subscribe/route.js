import dbConnect from '@/lib/mongoose';
import Subscriber from '@/models/Subscriber';
import { badRequest, json, serverError } from '../_utils';

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    if (!body?.email) return badRequest('email required');
    const existing = await Subscriber.findOne({ email: body.email }).lean();
    if (existing) return json({ ok: true, id: existing._id });
    const item = await Subscriber.create({ email: body.email });
    return json({ ok: true, id: item._id });
  } catch (e) {
    return serverError(e);
  }
}
