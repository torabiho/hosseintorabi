
import mongoose from 'mongoose';

const BioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    occupation: String,
    description: String,
    image: String,
    bio1: String,
    bio2: String,
    contactmessage: String,
    email: String,
    phone: String,
    address: {
        street: String ,
        city: String,
        country: String,
        postalCode: String,
    },
    website: String,
    resumedownload: String,
    social: [{
        name:String,
        url:String,
        className:String
    }]
});

export default mongoose.model('Bio', BioSchema);
