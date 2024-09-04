import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseSessionUser } from "../Context/Session";

export function RequiredAuth({ children }) {
  const { user, loading } = UseSessionUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user.id == null) {
      navigate("/login");
    }
  }, [loading,user, navigate]);

  return children;
}
