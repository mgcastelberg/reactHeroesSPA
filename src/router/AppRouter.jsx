import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navbar } from "../ui";


// Version React Router v6
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
        {/* <Route path="/" element={<LoginPage />} /> */}
      </Routes>
    </>
  );
};
