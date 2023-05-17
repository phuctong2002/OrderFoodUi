import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Auth = () => {
  const { token } = useAppContext();
  const token1 = localStorage.getItem('token');
  // cho nay co the call api kem theo token de xac thuc danh tinh nhe cai nay ngu qua boi vi scretkey chi có ở server thôi mà nhỉ
  if (!token1) {
    return <Navigate to="/login" />;
  }
  return <Outlet/>;
};

export default Auth;
