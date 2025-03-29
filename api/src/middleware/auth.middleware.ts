import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { AuthRequest } from '../lib/types';

const auth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token = req.cookies.token;


    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1]; // Extract token from "Bearer token"
      }
    }

    if (!token) {
      res.status(400).json({
        success: false,
        message: 'Token is missing or invalid',
      });
      return;
    }

    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      res.status(500).json({
        success: false,
        message: 'JWT is not defined',
      });
      return;
    }

    const decode = jwt.verify(token, JWT_SECRET) as { id: string };

    if (decode) {
      req.userID = decode.id;
      
      next();
    } else {
      res.status(403).json({
        success: false,
        message: 'Invalid Token',
      });
    }
  } catch (error) {
    console.error('Error in auth middleware', error);
    res.status(500).json({
      success: false,
      message: 'Error during token verification',
    });
  }
};

export default auth 