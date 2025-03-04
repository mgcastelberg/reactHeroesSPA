import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";


// Version React Router v6
export const AppRouter= () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={
          <PrivateRoute >
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* <Route path="/*" element={<HeroesRoutes />} /> */}

      </Routes>
    </>
  );
};
