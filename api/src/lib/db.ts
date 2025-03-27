import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(`🟢 MONGODB CONNECTED SUCCESSFULLY : ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`🔴 ERROR CONNECTING TO MONGODB: ${error}`);
    process.exit(1)
  }
};
