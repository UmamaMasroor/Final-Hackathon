import express from "express";
import cors from 'cors';
import connectToMongodb from "./config/db.js";
import authRoutes from './routes/blog.js';
const app = express();
const PORT = 9000;

connectToMongodb();

app.use(cors());
app.use (express.json());

app.get("/", (req,res)=>{
    res.send("API is running..");
});

//API Routes
app.use("/api/vi",authRoutes)


app.listen(PORT,()=>{
    console.log(`API is running on https://localhost:${PORT}`);
});

// import express from 'express';
// import cors from 'cors';
// import connectToMongodb from './config/db.js';
// import authRoutes from './routes/blog.js';

// const app = express();
// const PORT = 9000;

// connectToMongodb();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("API is running..");
// });

// // API Routes
// app.use("/api/v1", authRoutes);

// app.listen(PORT, () => {
//     console.log(`API is running on https://localhost:${PORT}`);
// });

