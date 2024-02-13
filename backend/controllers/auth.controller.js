import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'

export const signup =async(req,res)=>{
    const{username, 
           email,
           password}=req.body;

           if(!username || !email || !password || username ==='' ||email ==='' || password===''){
            return res.status(400).json({message:'All fields are required'});
           }

           const hashedPassword = bcrypt.hashSync(password,10);
           const newUser =new User({
            username,
            email,
            password:hashedPassword,
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

}