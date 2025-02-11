import React from "react";
import { Route, Routes } from "react-router-dom";

import { DCPage } from "../heroes/pages/DCPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<MarvelPage />} /> */}
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
