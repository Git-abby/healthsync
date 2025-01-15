import express from "express";
import cors from "cors";
import "dotenv/config";

//add mongodb connection config
import connectDB from "./config/mongodb.js";
//add cloudinary
import connectCloudinary from "./config/cloudinaary.js";
import adminRouter from "./routes/adminRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

//Connecting Db
connectDB();
//cloudinary
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//API ENDPOINTS
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send(`API WORKING GET`);
});

app.listen(port, () => {
  console.log(`Server Started on ${port}`);
});