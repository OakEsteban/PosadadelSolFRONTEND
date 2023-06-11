import React from "react";
import CardWorker from "../CardWorker";
import t1 from "../../Images/trabajador1.jpg";
import t2 from "../../Images/trabajador2.jpg";
import t3 from "../../Images/trabajador3.jpeg";
import '../../Styles/Nosotros3.css'

export const Nosotros = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div className="container-101">
        <CardWorker
          src={t1}
          Title="Nuestros Recepcionistas"
          description="Nuestros empleados estan capacitados con las mejores habilidades par la atencion al cliente, estan capacitados para comprender lo que nuestros recidentes requieran."
        />

        {/* <CardWorker
          src={t3}
          Title="Nuestros Cocineros"
          description="Nuestros empleados estan capacitados con las mejores habilidades par la atencion al cliente, estan capacitados para comprender lo que nuestros recidentes requieran."
        />

        <CardWorker
          src={t2}
          Title="Los empleados de servicio"
          description="Nuestros empleados estan capacitados con las mejores habilidades par la atencion al cliente, estan capacitados para comprender lo que nuestros recidentes requieran."
        /> */}
      </div>
    </div>
  );
};

export default Nosotros;
