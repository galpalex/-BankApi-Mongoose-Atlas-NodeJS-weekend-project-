const Client = require("../schema/Client");

const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).send(clients);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const addClient = async (req, res) => {
  const client = new Client(req.body);
  try {
    await client.save();
    res.status(201).json({ message: "Added client succesfully!" });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const deleteClient = async (req, res) => {
  const { id } = req.params;
  if (await Client.exists({ passportId: id })) {
    await Client.findOneAndDelete({ passportId: id });
    res.status(202).json({ message: `Deleted client succesfully, id: ${id}!` });
  } else {
    res
      .status(400)
      .json({ message: `Error: Client id: ${id} does not exists` });
  }
};

module.exports = {
  getClients,
  addClient,
  deleteClient,
};
