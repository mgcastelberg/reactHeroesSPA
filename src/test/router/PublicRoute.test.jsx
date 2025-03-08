jest.spyOn(console, "warn").mockImplementation((message) => {
  if (!message.includes("React Router Future Flag Warning")) {
    console.warn(message);
  }
});

import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { PublicRoute } from "../../router/PublicRoute";

describe("Pruebas en <PublicRoute />", () => {
  test("debe de mostrar el children si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    const { getByText } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PublicRoute>
            <h1>Ruta Pública</h1>
          </PublicRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(getByText("Ruta Pública")).toBeTruthy();
  });

  test("debe de navegar si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Manux",
        id: "ABC123",
      },
    };

    const { getByText } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(getByText("Página Marvel")).toBeTruthy();
  });
});
