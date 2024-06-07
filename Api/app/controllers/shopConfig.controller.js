const Model = require("../models/");

exports.get = async (req, res) => {
  Model.find()
    .then((result) => {
      console.log("Listing .");
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the .", err);
      res.status(500).send({
        message: err.message || "There was an error getting the .",
      });
    });
};

exports.getByID = async (req, res) => {
  Model.then((result) => {
    console.log("Listing .");
    res.send(result);
  }).catch((err) => {
    console.log("There was an error getting the .", err);
    res.status(500).send({
      message: err.message || "There was an error getting the .",
    });
  });
};

exports.create = async (req, res) => {
  const {} = req.body;

  const x = new Model({});

  x.save()
    .then(() => {
      console.log("Registering .");
      res.send({ message: " successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the .", err);
      res.status(500).send({
        message: err.message || "There was an error registering the .",
      });
    });
};

exports.edit = async (req, res) => {
  const {} = req.body;

  Model.findByIdAndUpdate(req.params.id, {}, { new: true })
    .then(() => {
      console.log("Updating .");
      res.send({ message: "The  was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the .", err);
      res.status(500).send({
        message: err.message || "There was an error updating the .",
      });
    });
};

exports.delete = async (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the .");
      res.send({ message: "The  was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the .", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the .",
      });
    });
};
