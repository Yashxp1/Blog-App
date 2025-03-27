import User from '../model/user.model';
import { Request, Response } from 'express';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {

    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      res.status(400).json({
        success: false,
        message: 'All the fields are required',
      });
      return;
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: 'User already exists',
      });
      return;
    }

    const user = await User.create({ name, username, password });

    res.status(200).json({
      success: true,
      user,
      message: 'New user created',
    });

  } catch (error) {
    console.error('Error in SIGNUP ', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};
