import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../pages/home";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
