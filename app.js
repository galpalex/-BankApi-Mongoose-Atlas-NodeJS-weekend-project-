const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const clientsRouters = require("./routes/client.routers");
require("dotenv").config();
const publicPath = path.join(__dirname, "client/build");
app.use(express.static(publicPath));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/bank-api/", clientsRouters);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

const port = process.env.PORT || 5000;

const dbUrl = `mongodb+srv://galpalex:${process.env.PASS}@cluster0.goitp.mongodb.net/clients?retryWrites=true&w=majority`;
//mongoose.connect(dbUrl, () => console.log("connected to mongo cloud"));

//local;
mongoose.connect("mongodb://127.0.0.1:27017/clients");

app.listen(port, () => {
  console.log("listening on port " + port);
});
