import logoPosada from "../Images/logoPosada.png";
import Usuario1 from "../Images/OpinionsImages/Xi-Jinping.jpg";
import Usuario2 from "../Images/OpinionsImages/Abascal.jpg";
import Usuario3 from "../Images/OpinionsImages/Narendra.jpg";
import Usuario4 from "../Images/OpinionsImages/Orban.jpg";
import "../Styles/Opinions.css";
import React, { useState } from "react";
//import {useform} from "react-hook-form"

function Opinions() {
    return (
      <body>
        <section id="testimonials">   
  <div class="testimonial-heading">
      <span>Comentarios</span>
      <h1>Nuestros clientes opinan...</h1>
  </div>
  <div class="testimonial-box-container">
  <div class="testimonial-box">
         <div class="box-top">
             <div class="profile">
             <div class="profile-img">
                 <img src= {Usuario1} />
             </div>
             <div class="name-user">
                 <strong>Sun Yat-Sen</strong>
                 <span>25 de mayo del 2023</span>
             </div>
             </div>
             <div class="reviews">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
             </div>  
             </div>
             <div class="client-comment">
                 <p>Mi estadía en este hotel fue muy agradable. Las habitaciones eran espaciosas y cómodas, con una bonita decoración. El personal fue amable y atento, siempre dispuesto a ayudar. La ubicación del hotel también era conveniente, cerca de varios puntos de interés. Lo único que podría mejorar es la variedad de opciones en el desayuno</p>
             </div>
         </div>
     </div>
     <div class="testimonial-box-container">
              <div class="testimonial-box">
              <div class="box-top">
                      <div class="profile">
                      <div class="profile-img">
                          <img src={Usuario2}/>
                      </div>
                      <div class="name-user">
                          <strong>Santiago Abascal</strong>
                          <span>29 de mayo del 2023</span>
                      </div>
                      </div>
                      <div class="reviews">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                      </div>  
                      </div>
                      <div class="client-comment">
                          <p>Recomendaría este hotel a otros viajeros. La limpieza de las habitaciones era impecable y el servicio de habitaciones fue rápido y eficiente. Disfruté de las instalaciones, como la piscina y el gimnasio, que estaban bien mantenidos. El único inconveniente fue el ruido ocasional en los pasillos, pero en general tuve una estancia agradable.</p>
                      </div>
                  </div>
              </div>
    <div class="testimonial-box-container">                      
      <div class="testimonial-box">
          <div class="box-top">
              <div class="profile">
              <div class="profile-img">
                  <img src={Usuario3}/>
              </div>
              <div class="name-user">
                  <strong>Narendra Modi</strong>
                  <span>28 de mayo del 2023</span>
              </div>
              </div>
              <div class="reviews">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
              </div>  
              </div>
              <div class="client-comment">
                  <p>Mi experiencia en este hotel fue satisfactoria en general. Las habitaciones eran confortables y tenía todas las comodidades necesarias. El personal fue amigable y servicial, y el proceso de check-in y check-out fue rápido y sin problemas. El único aspecto que podría mejorar es la variedad de opciones de comida en el restaurante del hotel. En general, recomendaría este lugar para una estancia cómoda.</p>
              </div>
          </div>
        </div>
    <div class="testimonial-box-container">     
      <div class="testimonial-box">
          <div class="box-top">
              <div class="profile">
              <div class="profile-img">
                  <img src={Usuario4}/>
              </div>
              <div class="name-user">
                  <strong> Viktor Orban</strong>
                  <span>11 de junio del 2023</span>
              </div>
              </div>
              <div class="reviews">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
              </div>  
              </div>
              <div class="client-comment">
                  <p>Es un hotel muy bonito, organizado y limpio con un servicio al cliente sadisfactoria y una buena vista a las montañas, podrian mejorar su servicio de restaurante...</p>
              </div>
            </div>
      </div>
</section>
      </body>
    )
  }
  export default Opinions;

