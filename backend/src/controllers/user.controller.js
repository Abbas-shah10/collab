import { User } from '../models/user.model.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import {ApiError} from '../utils/api-error.js';
import {ApiResponse} from '../utils/api-response.js'

const generateAccessTokenAndRefreshToken = async(userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({validateBeforeSave: false});
    return {accessToken, refreshToken};
  } catch (error) {
    throw new ApiError(404, "User not found")
  }
}

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400,'Please provide all required fields');
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  const {accessToken, refresToken} = await generateAccessTokenAndRefreshToken(newUser._id);

  const options = {
    httpOnly: true,
    secure: true
  }

  if (newUser) {
    res.status(201).cookie("accessToken", accessToken, options).cookie("refreshToken", refreshToken, options).json(
      new ApiResponse(201, {newUser}, "New User created Successfully")
    )
  } else {
    res.status(400).json({ message: "Could not created user" });
  }

})


export { registerUser };