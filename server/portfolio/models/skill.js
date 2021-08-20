
import mongoose from 'mongoose';
import { dbConnectionInfo } from "../../../config.js";

const portfolioDB = mongoose.connection.useDb(dbConnectionInfo.dbs.portfolio);
const SkillSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    level: { type: String, required: true },
    visible: { type: Boolean, required: true }
});

export default portfolioDB.model('Skill', SkillSchema);