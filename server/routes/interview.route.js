import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { upload } from "../middlewares/multer.js";
import {
  analyzeResume,
  finishInterview,
  generateQuestion,
  submitAnswer,
} from "../controllers/interview.controller.js";

const InterviewRouter = express.Router();

InterviewRouter.post("/resume", isAuth, upload.single("resume"), analyzeResume);
InterviewRouter.post("/generate-questions", isAuth, generateQuestion);
InterviewRouter.post("/submit-answer", isAuth, submitAnswer);
InterviewRouter.post("/finish", isAuth, finishInterview);

export default InterviewRouter;
