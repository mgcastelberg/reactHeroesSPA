import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Ma usado en las app SPa web
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
