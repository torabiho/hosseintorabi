
import mongoose from 'mongoose';
import { dbConnectionInfo } from "../../../config.js";

const portfolioDB = mongoose.connection.useDb(dbConnectionInfo.dbs.portfolio);
const ProjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    date: {type: Number, required: false},
    videoLink: { type: String, required: false },
    url: { type: String, required: false },
    order: {type: Number, required: true},
    visible: { type: Boolean, required: true }
});

export default portfolioDB.model('Project', ProjectSchema);