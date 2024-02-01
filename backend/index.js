import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.DATABASE)
.then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });


const app=express();

// allow JSON as the input of the server
app.use(express.json());

app.listen(3000, ()=>{
    console.log('server is running at port 3000');

});

app.use("/backend/user",userRouter)
app.use("/backend/auth",authRouter)