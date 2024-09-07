const order = require("../controllers/order.controller");
const { HasAccess,MultiActionValidation } = require("../utils/RoleHandler");
const {ACCESS,CREATE,DETAILS,DELETE,EDIT} = require("../enums/ActionsEnums")
const {ORDERS} = require("../enums/ResourcesEnums")

module.exports = (app) => {
  app.get("/getOrders",HasAccess(ORDERS,ACCESS), order.getOrders);

  app.get("/getOrder/:id",MultiActionValidation(ORDERS,DETAILS,EDIT), order.getOrderByID);

  app.post("/addOrder",HasAccess(ORDERS,CREATE), order.createOrder);

  app.put("/editOrder/:id",HasAccess(ORDERS,EDIT), order.editOrder);

  app.delete("/deleteOrder/:id",HasAccess(ORDERS,DELETE), order.deleteOrder);
};
