const commentProduct = require("../controllers/commentProduct.controller");
const { Islogged } = require("../utils/RoleHandler");

module.exports = (app) => {
  app.post("/addComment",Islogged(), commentProduct.createProductComment);

  app.put("/editComment/:id",Islogged(), commentProduct.editProductComment);

  app.delete("/deleteComment/:id",Islogged(), commentProduct.deleteProductComment);
};
