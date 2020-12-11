import express from 'express';
import all_controller from "../controller/all";

const router = express.Router();

router.get('/', all_controller.all_list);

module.exports = router;