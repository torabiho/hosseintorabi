import express from "express";
import posts from "./api/routes/posts";
console.log("hossein inside blog router");
const router = express.Router();

router.use("/api/posts", posts);

module.exports = router;