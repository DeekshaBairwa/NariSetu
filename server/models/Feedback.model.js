// models/Feedback.model.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
    suggestions: {
      type: String,
      required: true,
      trim: true,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false } // Optional: already using submittedAt
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
