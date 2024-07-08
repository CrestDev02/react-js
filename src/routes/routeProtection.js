import React from "react";
import { Navigate } from "react-router-dom";

const RouteProtection = ({ children, pageAccess, isIOS = null }) => {
  let isAutheticated=false;

  try {
    const user = localStorage.getItem("authorised");
    console.log(user?.length === 0, "YY token==>", user);
    if (user ) {
      isAutheticated = true;
    } else {
      isAutheticated = false;
    }

    console.log("YY isAutheticated token==>>", isAutheticated);
  } catch (error) {
    isAutheticated = false;
  }

  return (
    <React.Fragment>
      {isAutheticated ? children : <Navigate to={"/login"} />}
    </React.Fragment>
  );
};

export default RouteProtection;
