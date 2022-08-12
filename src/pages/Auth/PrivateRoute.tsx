import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/Context";

export function PrivateRoute() {
  const { auth } = useStateContext();
  const token = auth;
  return (
    <div>
      <>{token ? <Outlet /> : <Navigate to="/login" />}</>
    </div>
  );
}
