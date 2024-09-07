const category = require("../controllers/categoryProduct.controller");
const { Islogged } = require("../utils/RoleHandler");

module.exports = (app) => {
  // MAYBIMP: /getCategories no tien validacion de session
  app.get("/getCategories", category.getCategories);

  app.post("/addCategory", Islogged(), category.createCategory);

  app.put("/editCategory/:id", Islogged(), category.editCategory);

  app.delete("/deleteCategory/:id", Islogged(), category.deleteCategory);
};
