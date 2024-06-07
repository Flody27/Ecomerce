module.exports = (app) => {
  const sales = require("../controllers/sales.controller");

  app.get("/getSales", sales.getSales);

  app.get("/getSale/:id", sales.getSaleByID);

  app.post("/registerSale", sales.registerSale);

  app.put("/editSale/:id", sales.editSale);

  app.delete("/deleteSale/:id", sales.deleteSale);
};
