import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    tag: { type: String },
    summary: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
