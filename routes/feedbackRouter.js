import express from "express";
import {
  createFeedback,
  getAllFeedback,
} from "../controllers/feedbackController.js";
const router = express.Router();

router.route("/").get(getAllFeedback).post(createFeedback);

export default router;
