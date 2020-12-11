import express from 'express';
import testimonial_controller from "../controller/testimonial";

const router = express.Router();

router.get('/', testimonial_controller.testimonial_list);

router.post('/create', testimonial_controller.testimonial_create);

router.get('/:id', testimonial_controller.testimonial_details);

router.put('/:id/update', testimonial_controller.testimonial_update);

router.delete('/:id/delete', testimonial_controller.testimonial_delete);


module.exports = router;
