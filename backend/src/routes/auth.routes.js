import express from 'express';
import { registerUser } from '../controllers/auth.controller.js';

const userRoutes = express.Router();


userRoutes.route("/register").post(registerUser);


export default userRoutes;