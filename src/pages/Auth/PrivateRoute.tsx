import { Navigate, Outlet  } from "react-router-dom";


export function PrivateRoute() {
//   const token = localStorage.getItem("auth");
const token = true;
  return (
    <div>
      <>{token ? <Outlet/> : <Navigate to="/login" />}</>
    </div>
  );
}
