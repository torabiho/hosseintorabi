import express from 'express';
import bio_controller from "../controller/bio";

const router = express.Router();

router.get('/', bio_controller.bio_list);

router.post('/create', bio_controller.bio_create);

router.get('/:id', bio_controller.bio_details);

router.put('/:id/update', bio_controller.bio_update);

router.delete('/:id/delete', bio_controller.bio_delete);


module.exports = router;