const customer = require("../controllers/customer.controller");
const { HasAccess,MultiActionValidation } = require("../utils/RoleHandler");
const {ACCESS,CREATE,DETAILS,DELETE,EDIT} = require("../enums/ActionsEnums")
const {CUSTOMERS} = require("../enums/ResourcesEnums")
module.exports = (app) => {
  app.get("/getCustomers",HasAccess(CUSTOMERS,ACCESS), customer.getCustomers);

  app.get("/getCustomer/:id",MultiActionValidation(CUSTOMERS,DETAILS,EDIT), customer.getCustomerByID);

  app.post("/addCustomer",HasAccess(CUSTOMERS,CREATE), customer.createCustomer);

  app.put("/editCustomer/:id",HasAccess(CUSTOMERS,EDIT), customer.editCustomer);

  app.delete("/deleteCustomer/:id",HasAccess(CUSTOMERS,DELETE), customer.deleteCustomer);
};
