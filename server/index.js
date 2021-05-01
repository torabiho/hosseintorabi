import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import expressWs from 'express-ws';
import { dbConnectionInfo } from "../config.js";
import education from "./api/routes/education";
import bio from "./api/routes/bio";
import skill from "./api/routes/skill";
import project from "./api/routes/project";
import testimonial from "./api/routes/testimonial";
import work from "./api/routes/work";
import email from "./api/routes/email";
import all from "./api/routes/all";
import portfolio from "./api/routes/portfolio";

const port = process.env.PORT || 50080;
const app = express();
const ws = expressWs(app);
const root = path.join(__dirname, '../client', 'build');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(root)); // Priority serve any static files

app.use("/api/educations", education);
app.use("/api/bios", bio);
app.use("/api/skills", skill);
app.use("/api/projects", project);
app.use("/api/testimonials", testimonial);
app.use("/api/works", work);
app.use("/api/send-email", email);
app.use("/api/portfolio", portfolio);
app.use("/api", all);

// All remaining requests return the React app, so it can handle routing.
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

mongoose.connect(dbConnectionInfo.dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(port, () => {
	console.log(`Connected to the server on port ${port}`);
});

export default app;
