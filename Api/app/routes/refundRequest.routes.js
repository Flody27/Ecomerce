module.exports = (app) => {
  const refundRequest = require("../controllers/refundRequest.controller");

  app.get("/getRefundRequests", refundRequest.getRefundRequests);

  app.get("/getRefundRequest/:id", refundRequest.getRefundRequestByID);

  app.post("/addRefundRequest", refundRequest.createRefundRequest);

  app.put("/editRefundRequest/:id", refundRequest.editRefundRequest);

  app.delete("/deleteRefundRequest/:id", refundRequest.deleteRefundRequest);
};
