import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    excerpt: { type: String },
    content: { type: String, required: true },
    coverUrl: { type: String },
    readTimeMin: { type: Number, default: 3 },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
    categories: [{ type: String, index: true }],
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
