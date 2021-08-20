import mongoose from 'mongoose';
import { dbConnectionInfo } from "../../../config.js";

const blogDB = mongoose.connection.useDb(dbConnectionInfo.dbs.blog);
const PostSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    subtitle: { type: String },
    postDate: { type: Date, required: true },
    content: [{
        main:String,
    }],
    visible: { type: Boolean, required: true },
});



export default blogDB.model('Post', PostSchema);


