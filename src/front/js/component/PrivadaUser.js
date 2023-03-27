import React, { useEffect, useState } from "react";



const PrivadaUser = () => {
  const [user, setUser]= useState ([]);
 
  useEffect(()=>{
    
      const optionsUser={
        headers:{
          "Content-Type": "application/json",
          'Authorization':'Bearer '+ localStorage.getItem('token')
        }
        }
      fetch(process.env.BACKEND_URL+ "/api/private" , optionsUser)
      .then((response)=>{
          return response.json()
      })
      .then ((response)=>{
          setUser(response)
      })
    
  },[])

  

  return (
    <>
      <div className="container ">
        <p className="fs-3 fst-italic text-center">
          Bienvienido a tu area privada
        </p>
        <p>Nombre : {user.name}</p>
        <p>Email: {user.email}</p>
        <div className="square col-md-6">
        <img src="https://www.muycomputerpro.com/wp-content/uploads/2021/09/lenguajes-programacion-populares-2021.jpg"></img>

        </div>
       
       
      </div>
    </>
  );
};

export default PrivadaUser;
