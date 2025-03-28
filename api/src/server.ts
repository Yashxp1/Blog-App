import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db';
import authRouter from './routes/auth.routes';
import blogRouter from './routes/blog.routes';
import commentRouter from './routes/comment.routes';

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/v1', authRouter);
app.use('/api/v1', blogRouter);
app.use('/api/v1', commentRouter);

app.listen(PORT, () => {
  try {
    connectDB();
    console.log(`SERVER STARTED ON PORT: ${PORT}`);
  } catch (error: any) {
    console.error('DB CONNECTION FAILED', error);
  }
});
