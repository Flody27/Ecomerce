const sales = require("../controllers/sales.controller");
const { HasAccess,MultiActionValidation } = require("../utils/RoleHandler");
const {ACCESS,CREATE,DETAILS,DELETE,EDIT} = require("../enums/ActionsEnums")
const {SALES} = require("../enums/ResourcesEnums")

module.exports = (app) => {
  app.get("/getSales",HasAccess(SALES,ACCESS), sales.getSales);

  app.get("/getSale/:id",MultiActionValidation(SALES,DETAILS,EDIT), sales.getSaleByID);

  app.post("/registerSale",HasAccess(SALES,CREATE), sales.registerSale);

  app.put("/editSale/:id",HasAccess(SALES,EDIT), sales.editSale);

  app.delete("/deleteSale/:id",HasAccess(SALES,DELETE), sales.deleteSale);
};
