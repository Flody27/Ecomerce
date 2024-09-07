const product = require("../controllers/product.controller");
const { HasAccess,MultiActionValidation } = require("../utils/RoleHandler");
const {ACCESS,CREATE,DETAILS,DELETE,EDIT} = require("../enums/ActionsEnums")
const {PRODUCTS} = require("../enums/ResourcesEnums")

module.exports = (app) => {
 
  app.get("/getProducts", HasAccess(PRODUCTS,ACCESS), product.getProducts);

  app.get("/getProduct/:id",MultiActionValidation(PRODUCTS,DETAILS,EDIT), product.getProductByID);

  app.post("/addProduct",HasAccess(PRODUCTS,CREATE), product.createProduct);

  app.put("/editProduct/:id",HasAccess(PRODUCTS,EDIT), product.editProduct);

  app.delete("/deleteProduct/:id",HasAccess(PRODUCTS,DELETE), product.deleteProduct);
};
