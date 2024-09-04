import { createContext, useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { Get } from "../Services/Api";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    name: "",
    lastName: "",
    role: null,
    iat: 0,
    exp: 0,
  });
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (user.role && resources.length === 0) {
      Get(`/getRoleName/${user.role}`).then((data) => {
        setResources(data.data.resources);
      });
    }
  }, [user.role]);

  const getUserInfo = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/VerifyToken`,
        {},
        { withCredentials: true }
      );
      setUser(response.data);
    } catch (error) {
      console.log("User not found");
    } finally {
      setLoading(false);
    }
  };

  const memoizedResources = useMemo(() => {
    return resources.map((resource) => resource.resource);
  }, [resources]);

  function Resources() {
    return memoizedResources;
  }

  const memoizedPermissions = useMemo(() => {
    const permissions = {};
    resources.forEach((res) => {
      permissions[res.resource] = new Set(res.actions);
    });
    return permissions;
  }, [resources]);

  function CanUserAccesTo(resource, action) {
    const userHasAccess =
      memoizedPermissions[resource] &&
      memoizedPermissions[resource].has(action);

    return !!userHasAccess;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        Resources,
        CanUserAccesTo: resources.length > 0 ? CanUserAccesTo : null,
        resources,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function UseSessionUser() {
  return useContext(UserContext);
}
