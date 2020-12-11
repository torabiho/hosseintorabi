
import mongoose from 'mongoose';

const EducationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    school: { type: String, required: true },
    degree: { type: String, required: true },
    graduated: { type: String, required: true },
    description: { type: String, required: true },
});

export default mongoose.model('Education', EducationSchema);