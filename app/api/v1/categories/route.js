import dbConnect from '@/lib/mongoose';
import Category from '@/models/Category';
import { json, serverError } from '../_utils';

export async function GET() {
  try {
    await dbConnect();
    const items = await Category.find({}).sort({ name: 1 }).lean();
    return json(items);
  } catch (e) {
    return serverError(e);
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const item = await Category.create(body);
    return json(item, { status: 201 });
  } catch (e) {
    return serverError(e);
  }
}
