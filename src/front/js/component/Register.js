import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({});

  const submit = (event) => {
    event.preventDefault();
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
    fetch(process.env.BACKEND_URL + "/api/signup", option)
      .then((response) => {
        response.json;
      })
      .then((response) => {
        console.log(response);
      });
  };

  const change = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    //se captura el valor en el input
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="text-center mt-3">
          <p className="fs-1 font-change">Registro</p>
        </div>

        <div className="container bg-secondary col-md-8 px-3 py-3 mt-2 mb-5">
          <div className="form-floating mb-3">
            <input
              type="name"
              className="form-control"
              id="floatingName"
              placeholder="Nombre y Apellidos"
              name="name"
              onChange={change}
            />
            <label htmlFor="floatingName">Nombre y Apellidos*</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              onChange={change}
            />
            <label htmlFor="floatingInput">
              Dirección de correo electrónico*
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type={"password"}
              className="form-control"
              id="floatingPassword"
              placeholder="contraseña"
              name="password"
              onChange={change}
            />
            <label htmlFor="floatingInput">Contraseña*</label>
          </div>

          <div className="col-12 mb-3 ">
            <button
              type="reset"
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Enviar
            </button>
          </div>
        </div>
        <div className="container">
          <Link className="btn btn-danger" to="/">
            Regresar home
          </Link>
        </div>
      </form>
    </>
  );
};

export default Register;
