import React from "react";
import WorkerMod from "../WorkerMod";
import Services from "../Services-Nosotros";
import Footer from '../Footer';


export const Nosotros = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "center"
      }}
    >
      <div className='bannerHabServ'>
        <h1 className='h1-HabServ' >Acerca de nosotros </h1>
      </div>

      <WorkerMod />
      <Services />
      <Footer />


    </div>
  );
};

export default Nosotros;
