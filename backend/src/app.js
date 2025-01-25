import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"; // Ensure correct import
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Change this to your frontend URL
    credentials: true,

    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Fix: Add a leading slash for the API route
app.use("/api/users", userRouter);

// app.get('/api/hello', (req, res) => {
//   res.json({ message: 'Hello, world!' });
// });
// app.get("/register", async (req, res) => {
//   console.log("POST /register route hit");
//   // Your logic
// });

export { app };
