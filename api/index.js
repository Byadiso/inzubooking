import express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import roomsRouter from './routes/rooms.js'
import hotelsRouter from './routes/hotels.js'

const app = express();
dotenv.config()

const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to MongoDb")
        } catch (error){
            throw error;
        }
}

mongoose.connection.on('disconnected',()=>{
    console.log("MongoDb disconnected")
})
mongoose.connection.on('connected',()=>{
    console.log("MongoDb connected")
})



// middleware functions

app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/users", usersRouter)
app.use("/api/hotels", hotelsRouter)
app.use("/api/rooms", roomsRouter)

app.listen(8800, ()=>{
    connect()
    console.log("connected to the backend")
});
