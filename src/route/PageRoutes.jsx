import React from "react";
import { Form, Route, Routes } from "react-router-dom";
import { Home, NotFound, PageLayout } from "src/layout";
import { CarSinglePage, GridView, ListView } from "src/pages/catalog";
import { SellCar, PromotionPage, VendorPage } from "src/pages/vendor";
import {
  MyCars,
  PersonalInfo,
  Security,
  Signin,
  Signup,
  WishList,
  Reviews,
  Profile,
} from "src/pages/account";

// import {}
const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Catalog */}
          {/* List view */}
          <Route path="/ListView" element={<ListView />} />
          {/* Grid view */}
          <Route path="/GridView" element={<GridView />} />
          {/* CarSinglePage */}
          <Route path="/CarSinglePage" element={<CarSinglePage />} />
          {/* Vendor */}
          {/* SellCar */}
          <Route path="/SellCar" element={<SellCar />} />
          {/* PromotionPage */}
          <Route path="/PromotionPage" element={<PromotionPage />} />
          {/* VendorPage */}
          <Route path="/VendorPage" element={<VendorPage />} />
          {/* Account  */}
          <Route path="/Profile" element={<Profile />}>
            {/* MyCars */}
            <Route path="/Profile/MyCars" element={<MyCars />} />
            {/* PersonalInfo */}
            <Route path="/Profile/PersonalInfo" element={<PersonalInfo />} />
            {/* Security */}
            <Route path="/Profile/Security" element={<Security />} />
            {/* Signin */}
            <Route path="/Profile/Signin" element={<Signin />} />
            {/* Singup */}
            <Route path="/Profile/SignUp" element={<Signup />} />
            {/* WishList */}
            <Route path="/Profile/WishList" element={<WishList />} />
            {/* Reviews */}
            <Route path="/Profile/Reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
