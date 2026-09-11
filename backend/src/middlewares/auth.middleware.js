import { User } from '../models/user.model.js';
import { ApiError } from '../utils/api-error.js';
import { asyncHandler } from '../utils/async-handler.js'
import jwt from 'jsonwebtoken';

const verifyJWT = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.refreshToken || req.header("Authorization")?.replace("Bearer ", "");


  if (!token) {
    throw new ApiError(401, 'Invalid access')
  }

  try {
    const decodedToken = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decodedToken._id).select("-password -refreshToken ");

    if (!user) {
      throw new ApiError(404, "User not found")
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid Access")
  }
})

export { verifyJWT }
