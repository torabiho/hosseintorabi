import express from 'express';
import work_controller from "../controller/work";

const router = express.Router();

router.get('/', work_controller.work_list);

router.post('/create', work_controller.work_create);

router.get('/:id', work_controller.work_details);

router.put('/:id/update', work_controller.work_update);

router.delete('/:id/delete', work_controller.work_delete);


module.exports = router;
