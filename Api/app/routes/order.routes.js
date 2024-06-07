module.exports = (app) => {
  const order = require("../controllers/order.controller");

  app.get("/getOrders", order.getOrders);

  app.get("/getOrder/:id", order.getOrderByID);

  app.post("/addOrder", order.createOrder);

  app.put("/editOrder/:id", order.editOrder);

  app.delete("/deleteOrder/:id", order.deleteOrder);
};
