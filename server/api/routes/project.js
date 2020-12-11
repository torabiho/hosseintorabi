import express from 'express';
import project_controller from "../controller/project";

const router = express.Router();

router.get('/', project_controller.project_list);

router.post('/create', project_controller.project_create);

router.get('/:id', project_controller.project_details);

router.put('/:id/update', project_controller.project_update);

router.delete('/:id/delete', project_controller.project_delete);


module.exports = router;
