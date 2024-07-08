import React from "react";
import { loggedInUserRoutes, publicRoutes } from "./routerList.js";
import { Route, Routes } from "react-router-dom";
import RouteProtection from "./routeProtection.js";
import Navbar from "../components/layouts/navbar.js";
import { ToastContainer } from "react-toastify";

const RootRouter = () => {
  return (
    <div>
      <Routes>
        {/*------- logged in users router -------*/}
        {loggedInUserRoutes.map(({ component, path, title, role }, key) => (
          <Route
            path={path}
            element={
              <>
                {" "}
                <Navbar />
                <RouteProtection>{component}</RouteProtection>
              </>
            }
            key={key}
          />
        ))}

        {publicRoutes.map(({ component, path, title }, key) => (
          <Route
            path={path}
            element={
              <>
                {component}
              </>
            }
            key={key}
          />
        ))}
      </Routes>
    </div>
  );
};

export default RootRouter;
