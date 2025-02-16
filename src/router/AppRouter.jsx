import React from "react";
import { Route, Routes } from "react-router-dom";
import { DCPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navbar } from "../ui";


// Version React Router v6
export const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<MarvelPage />} /> */}
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
};
