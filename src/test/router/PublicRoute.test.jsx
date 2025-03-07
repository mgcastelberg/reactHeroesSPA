jest.spyOn(console, "warn").mockImplementation((message) => {
    if (!message.includes("React Router Future Flag Warning")) {
      console.warn(message);
    }
});

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { PublicRoute } from "../../router/PublicRoute";

describe("Pruebas en <PublicRoute />", () => {
  test("debe de mostrar el children si no está autenticado", () => {
    const contextValue = {
      logged: false
    };

    const { getByText } = render(
      <MemoryRouter future={{ v7_startTransition: true }}>  {/* Aquí activamos la opción */}
        <AuthContext.Provider value={contextValue}>
          <PublicRoute>
            <h1>Ruta Pública</h1>
          </PublicRoute>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(getByText("Ruta Pública")).toBeTruthy();
  });
});
