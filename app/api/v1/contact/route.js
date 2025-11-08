import dbConnect from '@/lib/mongoose';
import ContactMessage from '@/models/ContactMessage';
import { badRequest, json, serverError } from '../_utils';

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    if (!body?.name || !body?.email) return badRequest('name and email are required');
    const item = await ContactMessage.create({
      name: body.name,
      email: body.email,
      services: body.services || [],
      project: body.project || body.subject || undefined,
      message: body.message || undefined,
    });
    // TODO: send email notification (Resend/SendGrid) when credentials are configured.
    return json({ ok: true, id: item._id });
  } catch (e) {
    return serverError(e);
  }
}
