import mongoose, { Schema } from 'mongoose';

const JobPostingSchema = new Schema(
  {
    title: { type: String, required: true },
    department: { type: String },
    location: { type: String },
    type: { type: String },
    description: { type: String, required: true },
    isOpen: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.JobPosting || mongoose.model('JobPosting', JobPostingSchema);
