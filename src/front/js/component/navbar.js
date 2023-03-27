import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate= useNavigate();
  const remove = () => {
    localStorage.removeItem("token");
	navigate("/")
  };

  return (
    <nav className="navbar navbar-light bg-light ">
      <div className="container d-grid gap-2 d-md-flex justify-content-md-end">
        <div className="ml-auto ">
        
          {localStorage.getItem("token") ? (
            <>
			 <Link
                className="btn btn-primary d-flex align-content-sm-center flex-wrap"
                to="/"
                onClick={remove}
              >
                Cerrar sesión
              </Link>
			
			</>
          ) : (
            <>
              <Link
                className="btn btn-primary me-md-2"
                to="/registro"
              >
                Registrarse
              </Link>
              <Link to="/login" className="btn btn-primary">
                Iniciar Sesión
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};
