import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minlength: 2,
    maxlength: 50,
  },
  feedback: {
    type: String,
    required: [true, "Please provide your feedback"],
    minlength: 2,
  },
});

export default mongoose.model("Feedback", FeedbackSchema);
