
import mongoose from 'mongoose';

const WorkSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: String, required: true },
    title: { type: String, required: true },
    years: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: false },
    visible: { type: Boolean, required: true }
});

export default mongoose.model('Work', WorkSchema);