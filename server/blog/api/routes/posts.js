import express from "express";
import posts_controller from "../controller/posts";

const router = express.Router();

router.get("/", posts_controller.post_list);

router.patch("/:id", posts_controller.post_update);

router.get("/:id", posts_controller.post_details);

module.exports = router;
