import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import expressWs from 'express-ws';
import vhost from "vhost";
import { dbConnectionInfo } from "../config.js";
import portfolioRouter from "./portfolio/portfolioRouter";
import blogRouter from "./blog/blogRouter";

const port = process.env.PORT || 50080;
const app = express();
const ws = expressWs(app);
const root = path.join(__dirname, '../client', 'build');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(root)); // Priority serve any static files
app.use(vhost('blog.hosseintorabi.com', blogRouter));
//app.use(subdomain('blog', blogRouter)); // Handle all requests from the blog
//app.use("/api",portfolioRouter); // Handle all requests from the main site

// All remaining requests return the React app, so it can handle routing.
// app.get("*", (req, res) => {
//     res.sendFile('index.html', { root });
// })

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
