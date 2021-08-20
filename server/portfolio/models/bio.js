
import mongoose from 'mongoose';
import { dbConnectionInfo } from "../../../config.js";

const portfolioDB = mongoose.connection.useDb(dbConnectionInfo.dbs.portfolio);
const BioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    occupation: String,
    description: String,
    image: String,
    about: [String],
    contactmessage: String,
    address: {
        street: String ,
        city: String,
        country: String,
        postalCode: String,
        email: String,
    },
    resumedownload: String,
    social: [{
        name:String,
        url:String,
        className:String
    }]
});

export default portfolioDB.model('Bio', BioSchema);
