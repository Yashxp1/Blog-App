import User from '../model/user.model';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res
        .status(400)
        .json({ success: false, message: 'All the fields are required' });
      return;
    }

    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      res.status(400).json({
        success: false,
        message: 'User does not exist',
      });
      return;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      res.status(400).json({
        success: false,
        message: 'Incorrect password',
      });
      return;
    }

    if (!process.env.JWT_SECRET) {
      res.status(500).json({
        success: false,
        message: 'JWT secret is missing in the server configuration.',
      });
      return;
    }

    const token = jwt.sign(
      { id: existingUser._id.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: '7h',
      }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      token,
    });
  } catch (error) {
    console.error('Error in login function', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    res.status(200).json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    console.error('Error logging out the user', Error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
