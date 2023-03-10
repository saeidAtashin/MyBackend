
// // Import Parse minified version
// import Parse from 'parse/dist/parse.min.js';

// // Your Parse initialization configuration goes here
// const PARSE_APPLICATION_ID = 'kIO0LGzaT9n663TSXXLv3g4PpVgn2nSM5bwOe2bU';
// const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
// const PARSE_JAVASCRIPT_KEY = 'Lv1APbiN74JDNSQdfyQnf6IPJYjG8XE9X19OfC36';
// Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
// Parse.serverURL = PARSE_HOST_URL;

// import Parse from 'parse/dist/parse.min.js';
// import { PersonComponent } from './views/PersonComponent';



require("dotenv").config()

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect(("mongodb://0.0.0.0:27017/mybrary"), { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to mongoose")); 

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
