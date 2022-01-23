const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

const clientsRouters = require("./routes/client.routers");

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

app.listen(port, () => {
  console.log("listening on port " + port);
});
