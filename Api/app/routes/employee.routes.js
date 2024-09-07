const employee = require("../controllers/employee.controller");
const { HasAccess,MultiActionValidation } = require("../utils/RoleHandler");
const {ACCESS,CREATE,DETAILS,DELETE,EDIT} = require("../enums/ActionsEnums")
const {EMPLOYEES} = require("../enums/ResourcesEnums")
module.exports = (app) => {
  app.get("/getEmployees",HasAccess(EMPLOYEES,ACCESS), employee.getEmployees);

  app.get("/getEmployee/:id",MultiActionValidation(EMPLOYEES,DETAILS,EDIT), employee.getEmployeeByID);

  app.post("/addEmployee",HasAccess(EMPLOYEES,CREATE), employee.createEmployee);

  app.put("/editEmployee/:id",HasAccess(EMPLOYEES,EDIT), employee.editEmployee);

  app.delete("/deleteEmployee/:id",HasAccess(EMPLOYEES,DELETE), employee.deleteEmployee);
};