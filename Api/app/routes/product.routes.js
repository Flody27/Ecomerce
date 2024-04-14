module.exports = (app) => {
  const product = require("../controllers/product.controller");

  app.get("/getProducts", product.getProducts);

  app.get("/getProduct/:id", product.getProductByID);

  app.post("/addProduct", product.createProduct);

  app.put("/editProduct/:id", product.editProduct);

  app.delete("/deleteProduct/:id", product.deleteProduct);
};
