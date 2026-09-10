import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller.js';

const userRoutes = express.Router();


userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(loginUser);


export default userRoutes;