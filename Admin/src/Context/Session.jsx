import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/VerifyToken`,
        {},
        { withCredentials: true }
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user info", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function UseSessionUser() {
  return useContext(UserContext);
}
