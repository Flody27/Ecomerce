module.exports = (app) => {
  const category = require("../controllers/categoryProduct.controller");

  app.get("/getCategories", category.getCategories);

  app.post("/addCategory", category.createCategory);

  app.put("/editCategory/:id", category.editCategory);

  app.delete("/deleteCategory/:id", category.deleteCategory);
};
