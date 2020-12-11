
import mongoose from 'mongoose';

const SkillSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    level: { type: String, required: true }
});

export default mongoose.model('Skill', SkillSchema);