import mongoose, { Schema } from 'mongoose';

const FaqSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Faq || mongoose.model('Faq', FaqSchema);
