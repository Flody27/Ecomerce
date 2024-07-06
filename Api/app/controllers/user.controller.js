const UserModel = require("../models/user.model");

exports.getUsers = async (req, res) => {
  UserModel.find()
    .then((result) => {
      console.log("Listing users.");
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the users.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the users.",
      });
    });
};

exports.getUserByID = async (req, res) => {
  UserModel.findById(req.params.id)
    .then((result) => {
      console.log("Listing user.");
      res.send(result);
    })
    .catch((err) => {
      console.log("There was an error getting the user.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the user.",
      });
    });
};

exports.createUser = async (req, res) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    password,
    role,
    address,
    active,
    salary,
    position,
    startDate,
    userType,
  } = req.body;

  const User = new UserModel({
    name,
    lastName,
    email,
    phoneNumber,
    password,
    role,
    address,
    active,
    salary,
    position,
    startDate,
    userType,
  });

  User.save()
    .then(() => {
      console.log("Registering user.");
      res.send({ message: "User successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the user.", err);
      res.status(500).send({
        message: err.message || "There was an error registering the user.",
      });
    });
};

exports.editUser = async (req, res) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    password,
    role,
    address,
    active,
    salary,
    position,
    startDate,
    userType,
  } = req.body;

  UserModel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      lastName,
      email,
      phoneNumber,
      password,
      role,
      address,
      active,
      salary,
      position,
      startDate,
      userType,
    },
    { new: true }
  )
    .then(() => {
      console.log("Updating user.");
      res.send({ message: "The user was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the user.", err);
      res.status(500).send({
        message: err.message || "There was an error updating the user.",
      });
    });
};

exports.deleteUser = async (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the user.");
      res.send({ message: "The user was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the user.", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the user.",
      });
    });
};
