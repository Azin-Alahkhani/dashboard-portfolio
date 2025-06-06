// components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = localStorage.getItem("auth") === "true";
  return isAuth ? <>{children}</> : <Navigate to="/login" />;
}
