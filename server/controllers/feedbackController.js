// controllers/feedbackController.js
import Feedback from "../models/Feedback.model.js";

export const submitFeedback = async (req, res) => {
  try {
    const { email, experience, suggestions } = req.body;

    // Validation check
    if (!email?.trim() || !experience?.trim() || !suggestions?.trim()) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newFeedback = new Feedback({
      email,
      experience,
      suggestions,
    });

    await newFeedback.save();

    return res.status(200).json({ message: "Thank you for your feedback!" });
  } catch (error) {
    console.error("❌ Feedback submission error:", error.message);
    return res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};
