import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  // lokalden token'i al js verisine çevir değişken at
  const token = JSON.parse(localStorage.getItem("token"));
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); //tokeni kaldır
    navigate("/");
  };

  // token yoksa "/" sayfasına yönlendir
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // token varsa
  return token ? (
    <>
      <Outlet />
      <button onClick={handleLogout}>Çıkış Yap</button>
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;

/* 
 * replace:
 * kullanıcı "/" sayfasına yönlendirildiğinde ve ardından geri tuşuna bastığında, 
tarayıcı bir önceki sayfaya gitmez. Bunun yerine, kullanıcı bir önceki sayfanın 
yerine "/" sayfasını görür.
*/
