import mongoose from 'mongoose';

import { dbConnectionInfo } from "../../../config.js";

const portfolioDB = mongoose.connection.useDb(dbConnectionInfo.dbs.portfolio);
const EducationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    school: { type: String, required: true },
    degree: { type: String, required: true },
    graduation: { type: Number, required: true },
    description: { type: String, required: true },
    visible: { type: Boolean, required: true },
});

export default portfolioDB.model('Education', EducationSchema);