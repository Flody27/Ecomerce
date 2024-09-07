const roleModel = require("../models/roles.model");

exports.HasAccess = (resource, action) => {
  return async (req, res, next) => {
    try {
      const userRole = req.sesssion["role"];
      const checkAccess = CheckPermission(userRole, resource, action);
      if (!checkAccess) {
        return res.status(403).json({ message: "No access to this resource" });
      }
      next();
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: "No access to this resource" });
    }
  };
};

exports.MultiActionValidation = (resource, action1, action2) => {
  return async (req, res, next) => {
    try {
      const userRole = req.sesssion["role"];
      const checkAction1 = CheckPermission(userRole, resource, action1);
      const checkAction2 = CheckPermission(userRole, resource, action2);

      if (!checkAction1 && !checkAction2) {
        return res.status(403).json({ message: "No access to this resource" });
      }
      next();
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: "No access to this resource" });
    }
  };
};

exports.Islogged = () => {
  return async (req, res, next) => {
    try {
      if (req.sesssion == null) {
        return res
          .status(403)
          .json({ message: "A session is required to perform this action" });
      }
      next();
    } catch (error) {
      return res
        .status(403)
        .json({ message: "A session is required to perform this action" });
    }
  };
};

const CheckPermission = async (roleName, resource, action) => {
  const roleExist = await roleModel.findOne({ roleName: { $eq: roleName } });
  if (!roleExist) {
    throw new Error("Role not found");
  }
  const resourceExist = roleExist.resources.filter(
    (res) => res.resource == resource
  );

  if (!resourceExist) {
    return false;
  }

  const actionExist = resourceExist.map((res) => res.actions).flat();

  return actionExist.includes(action);
};
