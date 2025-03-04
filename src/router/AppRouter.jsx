import { Navigate, Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { PrivacyPolicyPage } from "../auth/pages/PrivacyPolicyPage";
import { NotFoundPage } from "../auth/pages/NotFoundPage";


// Version React Router v6
export const AppRouter= () => {
  return (
    <>
      <Routes>
        {/* RUTAS PÚBLICAS */}
        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
        <Route path="/privacy" element={<PublicRoute><PrivacyPolicyPage /></PublicRoute>} />

        {/* RUTAS PRIVADAS */}
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
