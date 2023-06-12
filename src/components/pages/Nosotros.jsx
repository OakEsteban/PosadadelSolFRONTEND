import React from "react";
import WorkerMod from "../WorkerMod";
import Services from "../Services-Nosotros";


export const Nosotros = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        marginTop: '10%',
        justifyContent:"center"
      }}
    >
      <WorkerMod/> 
      <Services/>
      
    </div>
  );
};

export default Nosotros;
