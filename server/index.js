import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import { dbConnectionInfo } from "../config.js";
import education from "./api/routes/education";
import bio from "./api/routes/bio";
import skill from "./api/routes/skill";
import project from "./api/routes/project";
import testimonial from "./api/routes/testimonial";
import work from "./api/routes/work";
import all from "./api/routes/all";

const port = process.env.PORT || 50080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/educations',education);
app.use('/api/bios',bio);
app.use('/api/skills',skill);
app.use('/api/projects',project);
app.use('/api/testimonials',testimonial);
app.use('/api/works',work);
app.use('/api', all);

mongoose.connect(dbConnectionInfo.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
    console.log(`Connected to the server on port ${port}`);
})

export default app;