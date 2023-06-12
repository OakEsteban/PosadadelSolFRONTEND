import React from "react";
import img1 from "../Images/Principal 19.png";
import img2 from "../Images/Principal 21.png";
import img3 from "../Images/Principal 20.png";

import Carousel from "react-bootstrap/Carousel";
import carrusel from "../Styles/Carrusel.module.css";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UncontrolledExample() {
  return (
    
    <div>
      {/* --------------------------------------------------------------------- */}
      <section class={carrusel.font}>
        <h3>
          <strong>Nuestro hotel</strong>
        </h3>
        <h6>
          Nuestras instalaciones presentan las mejores condiciones para la
          estadía, cumple con diversas habitaciones servicios y comodidaes.<br />
          Todo para cumplir sus espectativas.
        </h6>
        <Button variant="outline-success" id={carrusel.btn1}>
          Ver mas
        </Button>{" "}
      </section>
      {/* ------------------------------------------------------------------------ */}
      <div className={carrusel.container}>
        <div className={carrusel.contLeft}>
          <Container>
            <Row>
              <Col>
                <img
                  src={img1}
                  alt=""
                  class={carrusel.imge2}
                  className={carrusel.bordeT}
                />
              </Col>

              <Col>
                <img src={img2} alt="" class={carrusel.imge2} />
              </Col>
            </Row>

            <Row>
              <Col>
                <img
                  src={img3}
                  alt=""
                  class={carrusel.imge2}
                  className={carrusel.bordeB}
                />
              </Col>
              <Col>
                <img src={img1} alt="" class={carrusel.imge2} />
              </Col>
            </Row>
          </Container>
        </div>

        <div className={carrusel.containerImg}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                class={carrusel.img}
              />
              <Carousel.Caption>
                <h3>Tranquilidad y descanso</h3>
                <p>
                  
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                class={carrusel.img}
              />

              <Carousel.Caption>
                <h3>Grandes vistas</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                class={carrusel.img}
              />

              <Carousel.Caption>
                <h3>Recreacion y deporte</h3>
                <p>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className={carrusel.contRight}>
          <Container>
            <Row>
              <Col>
                <img src={img1} alt="" class={carrusel.imge2} />
              </Col>

              <Col>
                <img
                  src={img2}
                  alt=""
                  class={carrusel.imge2}
                  className={carrusel.bordeTR}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <img src={img3} alt="" class={carrusel.imge2} />
              </Col>
              <Col>
                <img
                  src={img1}
                  alt=""
                  class={carrusel.imge2}
                  className={carrusel.bordeBR}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default UncontrolledExample;
