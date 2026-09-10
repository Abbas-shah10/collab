import express from 'express';
import { registerUser } from '../controllers/auth.controller.js';

const userRoutes = express.Router();


userRoutes.route("/").post(registerUser);


export default userRoutes;