
import mongoose from 'mongoose';

const TestimonialSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: { type: String, required: true },
    user: { type: String, required: true },
    organization: { type: String, required: true },
    visible: { type: Boolean, required: true }
});

export default mongoose.model('Testimonial', TestimonialSchema);