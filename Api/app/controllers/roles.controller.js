const roleModel = require("../models/roles.model");
const resourcesModel = require("../models/resources.model");

exports.getRoles = async (req, res) => {
  roleModel
    .find()
    .then((result) => {
      console.log("Listing roles.");
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the roles.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the roles.",
      });
    });
};

exports.getRoleByID = async (req, res) => {
  roleModel
    .findById(req.params.id)
    .then((result) => {
      console.log("Listing roles.");
      res.send(result);
    })
    .catch((err) => {
      console.log("There was an error getting the roles.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the roles.",
      });
    });
};

exports.createRole = async (req, res) => {
  const { roleName, resources, actions } = req.body;

  const x = new roleModel({ roleName, resources });

  x.save()
    .then(() => {
      console.log("Registering .");
      res.send({ message: "Role successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the role.", err);
      res.status(500).send({
        message: err.message || "There was an error registering the role.",
      });
    });
};

exports.editRole = async (req, res) => {
  const { roleName, resources, actions } = req.body;

  roleModel
    .findByIdAndUpdate(
      req.params.id,
      { roleName, resources, actions },
      { new: true }
    )
    .then(() => {
      console.log("Updating .");
      res.send({ message: "The role was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the role.", err);
      res.status(500).send({
        message: err.message || "There was an error updating the role.",
      });
    });
};

exports.deleteRole = async (req, res) => {
  roleModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the role.");
      res.send({ message: "The role was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the role.", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the role.",
      });
    });
};

// Resources
exports.getResources = async (req, res) => {
  resourcesModel
    .find()
    .then((result) => {
      console.log("Listing resources.");
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the resources.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the resources.",
      });
    });
};

exports.createResource = async (req, res) => {
  const { resource } = req.body;

  const x = new resourcesModel({ resource });

  x.save()
    .then(() => {
      console.log("Registering .");
      res.send({ message: "Resource successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the resource.", err);
      res.status(500).send({
        message: err.message || "There was an error registering the resource.",
      });
    });
};

exports.deleteResoruce = async (req, res) => {
  resourcesModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the .");
      res.send({ message: "The resource was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the resource.", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the resource.",
      });
    });
};
