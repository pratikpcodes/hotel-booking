import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db/index.js";

import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`⚙️ Server IS RUNNING AT PORT  :: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("connection failed index.js in src  :: " + error);
  });


  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
  });
  


