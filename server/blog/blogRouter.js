import express from "express";
import posts from "./api/routes/posts";

const router = express.Router();

router.use("/posts", posts);

module.exports = router;