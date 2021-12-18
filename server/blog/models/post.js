import mongoose from "mongoose";
import { dbConnectionInfo } from "../../../config.js";

const blogDB = mongoose.connection.useDb(dbConnectionInfo.dbs.blog);
const commentsSchema = [
  {
    id: mongoose.Schema.Types.ObjectId,
    commentDate: { type: Date, required: true },
    name: { type: String, required: true },
    comment: { type: String, required: true },
    lang: { type: String, required: true },
    approved: { type: Boolean, required: true },
  },
];
const PostSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  postDate: { type: Date, required: true },
  headerImage: { type: String, required: true },
  visible: { type: Boolean, required: true },
  title: { en: { type: String }, fa: { type: String } },
  subtitle: { en: { type: String }, fa: { type: String } },
  content: {
    en: { type: String },
    fa: { type: String },
  },
  postscripts: {
    en: [{ type: String }],
    fa: [{ type: String }],
  },
  comments: commentsSchema,
  categories: [
    {
      type: String,
    },
  ],
  mediaDescription: {
    en: { type: mongoose.Schema.Types.Mixed },
    fa: { type: mongoose.Schema.Types.Mixed },
  },
});

export default blogDB.model("Post", PostSchema);
