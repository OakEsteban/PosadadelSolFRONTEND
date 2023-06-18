import React from "react";
import img1 from "../Images/hotel.png";
import img2 from "../Images/hotel1.jpg";
import img3 from "../Images/hotel2.jpg";

import Carousel from "react-bootstrap/Carousel";
import "../Styles/Carrusel.css";

function UncontrolledExample() {
  return (
    <>
      <div className="cont-9">
        <p id="title-8">
          <strong>Conoce nuestro hotel</strong>
        </p>
        <p id="desc-4">
          En nuestro hotel encontraras la mejor experiencia vacacional
        </p>
      </div>
      <div className="cont-10">
        <div id="left">
          <img
            src={img1}
            alt=""
            id="img-2"
            style={{ borderTopLeftRadius: "1rem" }}
          />
          <img src={img1} alt="" id="img-2" />
          <img
            src={img1}
            alt=""
            id="img-2"
            style={{ borderBottomLeftRadius: "1rem" }}
          />
          <img src={img1} alt="" id="img-2" />
        </div>
        {/* ----------------------------------------------------------------------------- */}
        <Carousel id="carrusel-0">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
              id="img-1"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
              id="img-1"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
              id="img-1"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* ------------------------------------------------------------------------------------ */}

        <div id="rigth">
          <img src={img1} alt="" id="img-2" />
          <img
            src={img1}
            alt=""
            id="img-2"
            style={{ borderTopRightRadius: "1rem" }}
          />
          <img src={img1} alt="" id="img-2" />
          <img
            src={img1}
            alt=""
            id="img-2"
            style={{ borderBottomRightRadius: "1rem" }}
          />
        </div>
      </div>
    </>
  );
}

export default UncontrolledExample;
