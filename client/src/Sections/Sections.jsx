import React from "react";
import "./Sections.css";
import { Link, useNavigate } from "react-router-dom";

function Sections() {
  const navigate = useNavigate();

  return (
    <div>
      <section id="home">
        <div className="home_page ">
          <div className="home_img "></div>
          <div className="home_txt ">
            <p className="collectio ">SUMMER COLLECTION</p>
            <h2>
              FALL - WINTER
              <br />
              Collection 2023
            </h2>
            <div className="home_label ">
              <p>
                A specialist label creating luxury essentials. Ethically crafted
                <br />
                with an unwavering commitment to exceptional quality.
              </p>
            </div>
            <Link to={`/Mens`}>
              <button>
                SHOP NOW<i className="bx bx-right-arrow-alt"></i>
              </button>
            </Link>
            <div className="home_social_icons">
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#">
                <i className="bx bxl-pinterest"></i>
              </a>
              <a href="#">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sections;
