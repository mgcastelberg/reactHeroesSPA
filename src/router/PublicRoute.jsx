import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


export const PublicRoute = ({children}) => {
    const { logged } = useContext(AuthContext);
    const location = useLocation();

    // Si está logeado y está en /login, redirigirlo a /marvel
    if (logged && (location.pathname === "/login" || location.pathname === "/register")) {
        return <Navigate to="/marvel" />;
    }

    // Si no está logeado o está en una ruta pública permitida, mostrar la página
    return children;
        
}