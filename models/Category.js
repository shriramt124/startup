import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);
