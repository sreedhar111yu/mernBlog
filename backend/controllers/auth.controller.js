import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandeler } from '../utils/error.js';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json({ message: 'Sign up successful' });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.hasOwnProperty('username')) {
            res.status(400).json({ message: 'Username is already taken' });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        return next(errorHandeler(400, 'All fields are required'));
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return next(errorHandeler(404, 'User not found'));
        }

        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) {
            return next(errorHandeler(400, 'Invalid password'));
        }

        // Do something after successful authentication, e.g., generate a token.

        res.json({ message: 'Sign in successful' });
    } catch (error) {
        next(error);
    }
};
