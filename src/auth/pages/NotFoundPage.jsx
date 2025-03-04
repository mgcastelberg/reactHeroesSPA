import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página No Encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/marvel">Volver a la página principal</Link>
    </div>
  );
};