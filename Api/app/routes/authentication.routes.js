module.exports = (app) => {
  const auth = require("../controllers/authentication.controller");
  app.post("/Login", auth.login);
  app.post("/Singup", auth.singup);
  app.post("/Logout", auth.logout);
  app.post("/ChangePassword", auth.changePassword);
  app.post("/VerifyToken", auth.verifyToken);
};
