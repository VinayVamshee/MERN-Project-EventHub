import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const dotenv = require('dotenv');

import {userRouter} from './routes/users.js';
import {eventRouter} from './routes/events.js';
import { bookingsRouter } from './routes/bookings.js';


const app =express()

app.use(express.json());    //data coming from the frontend will be converted to JSON format  and its a middleware
app.use(cors());           //for communication btw front end and backend and its a middleware[which runs as soon as the server starts before anything]
app.use("/auth",userRouter);  //any link that ends with /auth will use userRouter and execute
app.use("/events",eventRouter);
app.use("/bookings", bookingsRouter);

mongoose.connect("mongodb+srv://MERN_Project_19:Kk3NKEUG6tJgrqil@cluster0.demzsay.mongodb.net/");


 app.listen(3001,()=>console.log("server started")); 