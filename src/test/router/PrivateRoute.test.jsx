jest.spyOn(console, "warn").mockImplementation((message) => {
  if (!message.includes("React Router Future Flag Warning")) {
    console.warn(message);
  }
});

import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { PrivateRoute } from "../../router/PrivateRoute";
import { PublicRoute } from "../../router/PublicRoute";

describe("Pruebas en <PublicRoute />", () => {
  test("debe de mostrar el children si está autenticado", () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "ABC123",
        name: "Manux"
      }
    };

    const { getByText } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(getByText("Ruta Privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
  });

});
