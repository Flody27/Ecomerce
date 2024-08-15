const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const TOKEN = process.env.JWT_SECRET;
const ENV = process.env.NODE_ENV;

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
  try {
    const userFound = await UserModel.findOne({
      email,
    });

    if (!userFound)
      return res.status(500).json({
        message: "Invalid credentials",
      });

    //TODO: Validar el estado de la cuenta activo/desactivado
    //TODO: Validar si no se procedido a confirmar la creacion de la cuenta

    const validPassword = bcrypt.compareSync(password, userFound.password);

    if (!validPassword)
      return res.status(401).json({
        message: "Invalid credentials",
      });

    const token = jwt.sign(
      { id: userFound._id, name: userFound.name, lastName: userFound.lastName },
      TOKEN,
      {
        expiresIn: "1h",
      }
    );

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: ENV === "PROD",
        sameSite: ENV === "PROD" ? "None" : "Lax",
        maxAge: 1000 * 60 * 60,
      })
      .send({ message: "Login successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};

exports.verifyToken = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.send(decoded);
  });
};

exports.logout = (req, res) => {
  res
    .clearCookie("access_token", {
      httpOnly: true,
      secure: ENV === "PROD",
      sameSite: ENV === "PROD" ? "None" : "Lax",
    })
    .status(200)
    .send({ message: "Logout successful" });
};

exports.changePassword = () => {};
