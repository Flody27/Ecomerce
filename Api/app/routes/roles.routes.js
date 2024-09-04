module.exports = (app) => {
  const controller = require("../controllers/roles.controller");

  app.get("/getRoles", controller.getRoles);

  app.get("/getRole/:id", controller.getRoleByID);

  app.get("/getRoleName/:name", controller.getRoleByName);

  app.post("/addRole", controller.createRole);

  app.put("/editRole/:id", controller.editRole);

  app.delete("/deleteRole/:id", controller.deleteRole);

  app.get("/getResources", controller.getResources);
};
