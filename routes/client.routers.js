const express = require("express");
const clientRouter = express.Router();

const {
  getClients,
  addClient,
  deleteClient,
} = require("../controllers/client.controllers");

clientRouter.get("/clients", getClients);
clientRouter.post("/clients", addClient);
clientRouter.delete("/:id", deleteClient);

module.exports = clientRouter;
