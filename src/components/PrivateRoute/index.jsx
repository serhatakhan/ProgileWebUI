import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

const PrivateRoute = () => {
  const navigate = useNavigate();
  // lokalden access_token'i al js verisine çevir değişken at
  const token = localStorage.getItem("access_token");
  
  const decodedToken = decodeToken(token); // parçalanmış hali

  // token yoksa veya undefined ise veya isExpired(günü geçmiş) ise..
  if (!token || token === undefined || isExpired(token)) {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }
  
  const handleLogout = () => {
    localStorage.clear(); // lokaldeki(token dahil) kullanıcıya ait tim bilgileri sil
    navigate("/login");
  };

  // token varsa
  return token ? (
    <>
      <Outlet />
      <button onClick={handleLogout}>Çıkış Yap</button>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;

/* 
 * replace:
 * kullanıcı "/" sayfasına yönlendirildiğinde ve ardından geri tuşuna bastığında, 
tarayıcı bir önceki sayfaya gitmez. Bunun yerine, kullanıcı bir önceki sayfanın 
yerine "/" sayfasını görür.
*/
