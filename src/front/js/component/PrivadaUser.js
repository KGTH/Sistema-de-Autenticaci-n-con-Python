import React, { useEffect, useState,  } from "react";

const PrivadaUser = () => {
  const [user , setUser]= useState({});

  useEffect(() => {
    const optionPrivada = {
      headers: {
        "Contenty-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(process.env.BACKEND_URL + "/api/private", optionPrivada)
      .then((response) => {
        response.json();
      })
      .then((response) => {
        setUser
      });
  }, []);

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
