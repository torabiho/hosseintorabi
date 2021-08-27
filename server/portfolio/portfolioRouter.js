import education from "./api/routes/education";
import bio from "./api/routes/bio";
import skill from "./api/routes/skill";
import project from "./api/routes/project";
import testimonial from "./api/routes/testimonial";
import work from "./api/routes/work";
import email from "./api/routes/email";
import all from "./api/routes/all";
import portfolio from "./api/routes/portfolio";
import express from "express";

const router = express.Router();

router.use("/api/educations", education);
router.use("/api/bios", bio);
router.use("/api/skills", skill);
router.use("/api/projects", project);
router.use("/api/testimonials", testimonial);
router.use("/api/works", work);
router.use("/api/send-email", email);
router.use("/api/portfolio", portfolio);
router.use("/api/", all);

module.exports = router;
