import express from 'express';
import education_controller from "../controller/education";

const router = express.Router();

router.get('/', education_controller.education_list);

router.post('/create', education_controller.education_create);

router.get('/:id', education_controller.education_details);

router.put('/:id/update', education_controller.education_update);

router.delete('/:id/delete', education_controller.education_delete);


module.exports = router;
