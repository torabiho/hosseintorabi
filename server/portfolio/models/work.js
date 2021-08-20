
import mongoose from 'mongoose';
import { dbConnectionInfo } from "../../../config.js";

const portfolioDB = mongoose.connection.useDb(dbConnectionInfo.dbs.portfolio);
const WorkSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: false },
    visible: { type: Boolean, required: true },
    startYear: { type: Number, required: true },
    endYear: { type: Number, required: false }
});

export default portfolioDB.model('Work', WorkSchema);