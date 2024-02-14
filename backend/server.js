import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.router.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });


const app =express();

app.use(express.json())
app.listen(3000,()=>{
    console.log('srever is running on potr 3000');
})

app.use('/user',userRouter);
app.use('/auth',authRouter);


app.use((err,req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message =err.message || 'Internal Server Error';
  res.status(statusCode).json({
    succes:false,
    statusCode,
    message
  })

})