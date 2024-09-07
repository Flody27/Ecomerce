const controller = require("../controllers/roles.controller");
const { HasAccess,MultiActionValidation,Islogged } = require("../utils/RoleHandler");
const {ACCESS,CREATE,DETAILS,DELETE,EDIT} = require("../enums/ActionsEnums")
const {ROLES} = require("../enums/ResourcesEnums")

module.exports = (app) => {
  app.get("/getRoles",HasAccess(ROLES,ACCESS), controller.getRoles);

  app.get("/getRole/:id",MultiActionValidation(ROLES,DETAILS,EDIT), controller.getRoleByID);

  app.get("/getRoleName/:name",Islogged(), controller.getRoleByName);

  app.post("/addRole",HasAccess(ROLES,CREATE), controller.createRole);

  app.put("/editRole/:id",HasAccess(ROLES,EDIT), controller.editRole);

  app.delete("/deleteRole/:id",HasAccess(ROLES,DELETE), controller.deleteRole);

  app.get("/getResources",HasAccess(ROLES,ACCESS), controller.getResources);
};
