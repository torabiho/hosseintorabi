
import mongoose from 'mongoose';
import { dbConnectionInfo } from "../../../config.js";

const portfolioDB = mongoose.connection.useDb(dbConnectionInfo.dbs.portfolio);
const TestimonialSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: { type: String, required: true },
    user: { type: String, required: true },
    organization: { type: String, required: true },
    visible: { type: Boolean, required: true }
});

export default portfolioDB.model('Testimonial', TestimonialSchema);