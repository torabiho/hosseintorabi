import express from "express";
import posts from "./api/routes/posts";
const router = express.Router();

router.use((req, res, next) => {
  res.status(404);
  next(new Error("Not found"));
});

router.use("/api/posts", posts);

module.exports = router;
