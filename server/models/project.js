
import mongoose from 'mongoose';

const ProjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    videoLink: { type: String, required: false },
    url: { type: String, required: false },
});

export default mongoose.model('Project', ProjectSchema);