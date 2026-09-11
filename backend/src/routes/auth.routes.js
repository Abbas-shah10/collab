import express from 'express';
import { loginUser, registerUser, getCurrentUser } from '../controllers/auth.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
const userRoutes = express.Router();


userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(loginUser);

// secured routes
userRoutes.route("/me").get(verifyJWT, getCurrentUser)
export default userRoutes;