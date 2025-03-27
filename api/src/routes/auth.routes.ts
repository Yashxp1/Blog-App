import { register, login, logout } from '../controllers/userController';
import express from 'express';

const authRouter = express.Router();

authRouter.post('/auth/register', register);
authRouter.post('/auth/login', login);
authRouter.post('/auth/logout', logout);

export default authRouter