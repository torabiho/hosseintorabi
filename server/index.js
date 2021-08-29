import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import expressWs from "express-ws";
import subdomain from "express-subdomain";
import { dbConnectionInfo } from "../config.js";
import portfolioRouter from "./portfolio/portfolioRouter";
import blogRouter from "./blog/blogRouter";

const port = process.env.PORT || 50080;
const app = express();
const mainRouter = express.Router();
const ws = expressWs(app);
const root = path.join(__dirname, "../client", "build");

mainRouter.use("/api", portfolioRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(express.static(root)); // Priority serve any static files
app.use(subdomain("blog.api", blogRouter)); // Handle all requests from the blog
app.use(subdomain("www", mainRouter)); // Handle all requests from the main site
app.use(cors());

// All remaining requests return the React app, so it can handle routing.
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

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
