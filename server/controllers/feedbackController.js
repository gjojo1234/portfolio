import Feedback from "../models/Feedback.js";
import { StatusCodes } from "http-status-codes";

const getAllFeedback = async (req, res) => {
  const feedBacks = await Feedback.find({});
  res.status(StatusCodes.OK).json({ feedBacks });
};
const createFeedback = async (req, res) => {
  const { name, feedback } = req.body;
  const feedBack = await Feedback.create({ name, feedback });
  res.status(StatusCodes.CREATED).json({ feedBack });
};

export { getAllFeedback, createFeedback };
