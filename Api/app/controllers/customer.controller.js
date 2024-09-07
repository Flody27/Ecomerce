const UserModel = require("../models/user.model");

exports.getCustomers = async (req, res) => {
  UserModel.find({ userType: "customer" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the customers.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the customers.",
      });
    });
};

exports.getCustomerByID = async (req, res) => {
  UserModel.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("There was an error getting the customer.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the customer.",
      });
    });
};

exports.createCustomer = async (req, res) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    password,
    address,
    active,
    userType,
  } = req.body;

  const User = new UserModel({
    name,
    lastName,
    email,
    phoneNumber,
    password,
    address,
    active,
    userType,
  });

  User.save()
    .then(() => {
      console.log("Registering customer.");
      res.send({ message: "Customer successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the customer.", err);
      res.status(500).send({
        message: err.message || "There was an error registering the customer.",
      });
    });
};

exports.editCustomer = async (req, res) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    password,
    address,
    active,
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
      address,
      active,
      userType,
    },
    { new: true }
  )
    .then(() => {
      console.log("Updating customer.");
      res.send({ message: "The customer was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the customer.", err);
      res.status(500).send({
        message: err.message || "There was an error updating the customer.",
      });
    });
};

exports.deleteCustomer = async (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the customer.");
      res.send({ message: "The customer was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the customer.", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the customer.",
      });
    });
};
