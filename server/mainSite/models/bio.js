
import mongoose from 'mongoose';

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

export default mongoose.model('Bio', BioSchema);
