import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      sessionStorage.setItem(
        "techsasi_auth_required_reason",
        "Client Portal is restricted: Please sign in to establish an authenticated session with the PHP backend."
      );
      toast.error("Authentication Required: Access to the client portal and backend data requires login.", {
        id: "auth-required-toast",
      });
    }
  }, [token]);

  // Client Portal requires explicit authenticated login to access backend
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
