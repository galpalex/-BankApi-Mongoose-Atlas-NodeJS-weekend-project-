const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  passportId: {
    type: Number,
    required: true,
    unique: true,
  },
  cash: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Cash should be a positive number");
      }
    },
    default: 0,
  },
  credit: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Credit should be a positive number");
      }
    },
    default: 0,
  },
});
const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
