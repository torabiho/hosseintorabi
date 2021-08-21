import express from "express";
import posts from "./api/routes/posts";
const router = express.Router();

router.use("/api/posts", posts);

module.exports = router;