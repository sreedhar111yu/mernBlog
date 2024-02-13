import User from '../models/user.model.js'

export const signup =async(req,res)=>{
    const{username, 
           email,
           password}=req.body;

           if(!username || !email || !password || username ==='' ||email ==='' || password===''){
            return res.status(400).json({message:'All fields are required'});
           }
           const newuser =new User({
            username,
            email,
            password,
           });

           try{
            
           await newuser.save();
           res.json({message:'signin succes'})

           }catch (error){
            res.status().json({message:"error.message"})

           }


}