import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors";
import coordinateRoutes from "./routes/coordinateRoutes.js"

const PORT = process.env.PORT || 5000 ;
connectDB();

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api", coordinateRoutes)

app.get("/", (req,res)=>{
  res.send("Server is running")
})

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
})