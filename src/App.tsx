import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes_group } from "./routes";
require("@ravenpay/raven-bank-ui/dist/esm/styles/index.css");

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location}>
        {/* <Route
          path="/"
          element={<Navigate to={ROUTENAMES?.WEBSITE_HOME} />}
        /> */}
        {routes_group?.map((route: any, idx) => {
          return <Route key={idx} exact {...route} />;
        })}
      </Routes>
    </>
  );
}
export default App;
