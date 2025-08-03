// routes/feedbackRoutes.js
import express from "express";
import { submitFeedback } from "../controllers/feedbackController.js";

const router = express.Router();

// @route   POST /api/feedback/submit
// @desc    Submit feedback form
router.post("/submit", submitFeedback);

export default router;
