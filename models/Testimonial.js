import mongoose, { Schema } from 'mongoose';

const TestimonialSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String },
    avatar: { type: String },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
