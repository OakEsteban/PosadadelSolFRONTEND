import React from "react";
import WorkerMod from "../WorkerMod";
import Services from "../Services-Nosotros";
import Recuperar from "../login-register/Recuperar";
import Recuperar2 from '../login-register/Recuperar2'
import Recuperar3 from '../login-register/Recuperar3'


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
      {/* <WorkerMod/> 
      <Services/> */}

<Recuperar/>
<Recuperar2/>
<Recuperar3/>
      
    </div>
  );
};

export default Nosotros;
