import dbConnect from '@/lib/mongoose';
import JobPosting from '@/models/JobPosting';
import { json, serverError } from '../_utils';

export async function GET() {
  try {
    await dbConnect();
    const items = await JobPosting.find({ isOpen: true }).sort({ createdAt: -1 }).lean();
    return json(items);
  } catch (e) {
    return serverError(e);
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const item = await JobPosting.create(body);
    return json(item, { status: 201 });
  } catch (e) {
    return serverError(e);
  }
}
