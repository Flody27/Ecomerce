const auth = require("../controllers/authentication.controller");
const { Islogged } = require("../utils/RoleHandler");

module.exports = (app) => {
  app.post("/Login", auth.login);
  app.post("/Singup", auth.singup);
  app.post("/Logout", auth.logout);
  app.post("/ChangePassword", Islogged(), auth.changePassword);
  app.post("/VerifyToken", auth.verifyToken);
};
