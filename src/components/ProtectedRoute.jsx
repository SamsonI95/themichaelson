import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const { user, initialized } = useSelector((state) => state.auth);

  if (!initialized) return <div>Loading...</div>;

  if (!user) return <Navigate to="/admin/login" replace />;

  return children;
}
