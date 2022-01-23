const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = `mongodb+srv://galpalex:${process.env.PASS}@cluster0.goitp.mongodb.net/clients?retryWrites=true&w=majority`;
mongoose.connect(dbUrl, () => console.log("connected to mongo cloud"));
