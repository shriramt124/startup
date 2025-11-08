import mongoose, { Schema } from 'mongoose';

const ContactMessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    services: [{ type: String }],
    project: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.ContactMessage || mongoose.model('ContactMessage', ContactMessageSchema);
