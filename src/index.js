
import mongoose from "mongoose"
import dotenv from "dotenv"
import { app } from "./app.js";
import { connectDB } from "./db/dbconfig.js";
dotenv.config();
const PORT = process.env.PORT ||3000;

connectDB(()=>{
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})
}).then().catch((error=>{
    console.log("DB connection Failed");
    
}))


