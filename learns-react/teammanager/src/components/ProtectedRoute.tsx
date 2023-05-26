import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

type props = {
    children: any
}

export const ProtectedRoute = (props: props) => {
  const user = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return props.children;
};