const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.singup = async (req, res) => {
  const { name, lastName, email, password } = req.body;

  const exits = await UserModel.findOne({
    email,
  });

  if (exits) {
    return res.status(500).json({
      message: "Invalid credentials",
    });
  }
  let newPassword = bcrypt.hashSync(password, 10);

  const User = new UserModel({
    name,
    lastName,
    email,
    password: newPassword,
    userType: "customer",
    //TODO: cambiar a false al terminar las pruebas
    active: true,
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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const userFound = await UserModel.findOne({
    email,
  });

  if (!userFound) {
    return res.status(500).json({
      message: "Invalid credentials",
    });
  }

  //TODO: Validar el estado de la cuenta activo/desactivado
  //TODO: Validar si no se procedido a confirmar la creacion de la cuenta

  const validPassword = bcrypt.compareSync(password, userFound.password);

  if (!validPassword) {
    return res.status(500).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    { id: userFound._id, email: userFound.email },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({ token });
};

exports.changePassword = () => {};
