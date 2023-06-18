import React from "react";
import logo from "../../Images/logoPosada.png";

function Navside() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src={logo} alt="logo" />
              <span id="nav-item">La posada del sol.</span>
            </a>
          </li>

          <li>
            <a href="">
                <i className="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navside;
