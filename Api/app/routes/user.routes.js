module.exports = (app) => {
  const user = require("../controllers/user.controller");

  app.get("/getUsers", user.getUsers);

  app.get("/getUser/:id", user.getUserByID);

  app.post("/addUser", user.createUser);

  app.put("/editUser/:id", user.editUser);

  app.delete("/deleteUser/:id", user.deleteUser);
};
