import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import InterviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://ai-interview-agent-woad.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// handle preflight requests
app.options("*", cors());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", InterviewRouter);
app.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  return res.json({ message: "Server started at port 8000" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
