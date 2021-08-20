import express from 'express';
import skill_controller from "../controller/skill";

const router = express.Router();

router.get('/', skill_controller.skill_list);

router.post('/create', skill_controller.skill_create);

router.get('/:id', skill_controller.skill_details);

router.put('/:id/update', skill_controller.skill_update);

router.delete('/:id/delete', skill_controller.skill_delete);


module.exports = router;
