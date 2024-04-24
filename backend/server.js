import path from "path"
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



//set __dirname to current directory
const __dirname = path.resolve()
if(process.env.VITE_NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")))

  //any route that is not /api is going to load that index.html
  app.get('*', (req,res)=> {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  })
}else{
  //if we are in development, we dont need to load the index.html.Because we are using the Vite dev server or create-react-app dev server
  app.get('/', (req,res)=> {
    res.send("API is running")
  })
}


app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
})