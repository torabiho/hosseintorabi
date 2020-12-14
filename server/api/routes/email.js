import express from 'express';
import email_controller from "../controller/email";

const router = express.Router();
router.post('/', email_controller.send_email);

module.exports = router;

