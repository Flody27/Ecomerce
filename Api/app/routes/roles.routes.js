module.exports = (app) => {
  const controller = require("../controllers/roles.controller");

  app.get("/getRoles", controller.getRoles);

  app.get("/getRole/:id", controller.getRoleByID);

  app.post("/addRole", controller.createRole);

  app.put("/editRole/:id", controller.editRole);

  app.delete("/deleteRole/:id", controller.deleteRole);

  app.get("/getResources", controller.getResources);

  app.post("/addResource", controller.createResource);

  app.delete("/deleteResource/:id", controller.deleteResoruce);
};
