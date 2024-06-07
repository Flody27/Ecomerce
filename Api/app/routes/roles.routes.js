module.exports = (app) => {
  const controller = require("../controllers/roles.controller");

  app.get("/getRoles", controller.getRoles);

  app.get("/getRole/:id", controller.getRoleByID);

  app.post("/addRole", controller.createRole);

  app.put("/editRole/:id", controller.editRole);

  app.delete("/deleteRole/:id", controller.deleteRole);

  app.get("/getResources", controller.getResources);

  app.get("/getResource/:id", controller.getResourceByID);

  app.post("/addResource", controller.createResource);

  app.put("/editResource/:id", controller.editResource);

  app.delete("/deleteResource/:id", controller.deleteResoruce);
};
