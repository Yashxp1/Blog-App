import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db';

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  try {
    connectDB();
    console.log(`SERVER STARTED ON PORT: ${PORT}`);
  } catch (error: any) {
    console.error('DB CONNECTION FAILED', error);
  }
});
