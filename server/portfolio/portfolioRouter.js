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

router.use("*", (req, res, next) => {
  console.log("hossein before", req.subdomains);
  if (req.subdomains.length > 0) {
    console.log("hossein inside if");
    return next();
  }

  console.log("hossein after");
  next();
});

router.use("/educations", education);
router.use("/bios", bio);
router.use("/skills", skill);
router.use("/projects", project);
router.use("/testimonials", testimonial);
router.use("/works", work);
router.use("/send-email", email);
router.use("/portfolio", portfolio);
router.use("/", all);

module.exports = router;
