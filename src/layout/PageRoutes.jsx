import React from "react";
import PageLayout from "./PageLayout";
import { Route, Routes } from "react-router-dom";
import NotFound from "./notFound/NotFound";
import Mainpage from "../Mainpage";
// import {}
const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          {/* mainpage */}
          <Route path="/" element={<Mainpage />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
