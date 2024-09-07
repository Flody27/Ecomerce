const user = require("../controllers/user.controller");
const { HasAccess } = require("../utils/RoleHandler");
const {ACCESS,CREATE,DETAILS,DELETE,EDIT} = require("../enums/ActionsEnums")
const {} = require("../enums/ResourcesEnums")

// TODO: Dividir esto en Empleados y Clientes
// Provar usar HassAceess OR

module.exports = (app) => {
  app.get("/getUsers", user.getUsers);

  app.get("/getUser/:id", user.getUserByID);

  app.post("/addUser", user.createUser);

  app.put("/editUser/:id", user.editUser);

  app.delete("/deleteUser/:id", user.deleteUser);
};

