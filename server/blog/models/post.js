import mongoose from "mongoose";
import { dbConnectionInfo } from "../../../config.js";

const blogDB = mongoose.connection.useDb(dbConnectionInfo.dbs.blog);
const translationSchema = {
  title: { type: String, required: true },
  subtitle: { type: String },
  content: [
    {
      main: String,
    },
  ],
};
const PostSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  postDate: { type: Date, required: true },
  visible: { type: Boolean, required: true },
  en: translationSchema,
  fa: translationSchema,
});

export default blogDB.model("Post", PostSchema);
