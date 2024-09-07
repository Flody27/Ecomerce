const refundRequest = require("../controllers/refundRequest.controller");
const { HasAccess,MultiActionValidation } = require("../utils/RoleHandler");
const {ACCESS,CREATE,DETAILS,DELETE,EDIT} = require("../enums/ActionsEnums")
const {REFUNDS} = require("../enums/ResourcesEnums")

module.exports = (app) => {
  app.get("/getRefundRequests",HasAccess(REFUNDS,ACCESS), refundRequest.getRefundRequests);

  app.get("/getRefundRequest/:id",MultiActionValidation(REFUNDS,DETAILS,EDIT), 
  refundRequest.getRefundRequestByID);

  app.post("/addRefundRequest",HasAccess(REFUNDS,CREATE), refundRequest.createRefundRequest);

  app.put("/editRefundRequest/:id",HasAccess(REFUNDS,EDIT), refundRequest.editRefundRequest);

  app.delete("/deleteRefundRequest/:id",HasAccess(REFUNDS,DELETE), refundRequest.deleteRefundRequest);
};
