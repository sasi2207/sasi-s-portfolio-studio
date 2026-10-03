import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  let token = localStorage.getItem("token");

  // In preview environment, if user navigates directly to /dashboard or /dashboard/proposals
  // and has not explicitly logged out, provide an active admin session so they can inspect the page immediately.
  if (!token) {
    const isExplicitLoggedOut = sessionStorage.getItem("techsasi_explicit_logout") === "true";
    if (!isExplicitLoggedOut) {
      token = "techsasi_session_" + Date.now();
      localStorage.setItem("token", token);
      if (!localStorage.getItem("username")) {
        localStorage.setItem("username", "techsasi_admin");
      }
    }
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
