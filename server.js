const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port = 1000;
const inputfield = require("./router/inputRoute");
const staticRoute = require('./router/statics')

mongoose.connect("mongodb://127.0.0.1:27017/test2");
mongoose.connection.on("connected", () => {
  console.log("connected");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));



app.use("/api", inputfield);
app.use("/", staticRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
