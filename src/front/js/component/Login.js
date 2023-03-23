import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{

  const [data, setData]=useState({});

 const change=(event)=>{
  
  setData({...data, [event.target.name]: event.target.value})

 }
 const navigate = useNavigate();

  const submit =(event)=>{
    event.preventDefault();
    const optionLogin={
      method: "POST", 
      headers:{
        "Content-Type": "application/json"

      },
      body: JSON.stringify(data),
    
    };
    fetch(process.env.BACKEND_URL + "/api/login", optionLogin)
    .then((response)=>{
      response.json();
      if(response.status==200){
        navigate("/privada_user")
      }else { 
        alert("correo o contraseña incorrecta")
      }

    })
    .then((response)=>{
      console.log(response)
      localStorage.setItem("token", response.token);
      
    })

  }

return(

    
    <form onSubmit={submit}>
      <div className="text-center mt-3">
        <p className="fs-1 font-change">Iniciar Sesión</p>
      </div>

      <div className="container bg-secondary col-md-6 px-3 py-3 mt-2 mb-5">
        
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
            type="password"
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
            onClick={submit}
          >
            Enviar
          </button>
        </div>
      </div>
      
    </form>

)
}




export default Login;