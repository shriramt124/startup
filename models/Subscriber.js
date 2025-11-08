import mongoose, { Schema } from 'mongoose';

const SubscriberSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
  },
  { timestamps: true }
);

export default mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema);
