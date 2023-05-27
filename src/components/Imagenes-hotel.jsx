import Carousel from "react-bootstrap/Carousel";
import hotel from "../Images/hotel.png";
import hotel1 from "../Images/hotel1.jpg";
import hotel2 from '../Images/hotel2.jpg'
import '../Styles/Imagenes.css'

function UncontrolledExample() {
  return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={hotel} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hotel1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hotel2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={hotel} alt="First slide" />
          <Carousel.Caption>
            <h3>Fourth Slice Label</h3>
            <p>Prueba de funcionamiento</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
  );
}

export default UncontrolledExample;
