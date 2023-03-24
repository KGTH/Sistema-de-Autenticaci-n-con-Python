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
      <div className="container col-md-6">
        <p className="fs-3 fst-italic">
          Bienvienido a tu area privada,{user.name}
        </p>

        <p></p>
      </div>
    </>
  );
};

export default PrivadaUser;
