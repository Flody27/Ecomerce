const UserModel = require("../models/user.model");

exports.getEmployees = async (req, res) => {
  UserModel.find({ userType: "employee" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error("There was an error getting the employees.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the employees.",
      });
    });
};

exports.getEmployeeByID = async (req, res) => {
  UserModel.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("There was an error getting the employee.", err);
      res.status(500).send({
        message: err.message || "There was an error getting the employee.",
      });
    });
};

exports.createEmployee = async (req, res) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    password,
    role,
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
    active,
    salary,
    position,
    startDate,
    userType,
  });

  User.save()
    .then(() => {
      console.log("Registering employee.");
      res.send({ message: "Employee successfully registered." });
    })
    .catch((err) => {
      console.log("There was an error registering the employee.", err);
      res.status(500).send({
        message: err.message || "There was an error registering the employee.",
      });
    });
};

exports.editEmployee = async (req, res) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    password,
    role,
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
      active,
      salary,
      position,
      startDate,
      userType,
    },
    { new: true }
  )
    .then(() => {
      console.log("Updating employee.");
      res.send({ message: "The employee was successfully updated." });
    })
    .catch((err) => {
      console.log("There was an error updating the employee.", err);
      res.status(500).send({
        message: err.message || "There was an error updating the employee.",
      });
    });
};

exports.deleteEmployee = async (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("deleting the employee.");
      res.send({ message: "The employee was successfully deleted." });
    })
    .catch((err) => {
      console.log("There was an error deleting the employee.", err);
      res.status(500).send({
        message: err.message || "There was an error deleting the employee.",
      });
    });
};
