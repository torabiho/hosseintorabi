import express from "express";
import expressWs from "express-ws";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import subdomain from "express-subdomain";
import { dbConnectionInfo } from "../config.js";
import portfolioRouter from "./portfolio/portfolioRouter";
import blogRouter from "./blog/blogRouter";

const port = process.env.PORT || 50080;
const app = express();
const ws = expressWs(app); // required to establish WebSocket connection
const root = path.join(__dirname, "../client", "build");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(express.static(root)); // Priority serve any static files
app.use(subdomain("blog.api", blogRouter)); // Handle all requests from the blog
app.use("/api", portfolioRouter);

// All remaining requests return the React app, so it can handle routing.
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

mongoose.connect(dbConnectionInfo.dbUrl);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(port, () => {
  console.log(`Connected to the server on port ${port}`);
});

export default app;
