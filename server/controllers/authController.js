import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  const isCorrectPassword = await user.comparePassword(password);
  if (!isCorrectPassword) {
    console.log("password error");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
  });
};
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
    },
    token,
  });
};

export { loginUser, registerUser };
