module.exports = (app) => {
  const commentProduct = require("../controllers/commentProduct.controller");

  app.post("/addComment", commentProduct.createProductComment);

  app.put("/editComment/:id", commentProduct.editProductComment);

  app.delete("/deleteComment/:id", commentProduct.deleteProductComment);
};
