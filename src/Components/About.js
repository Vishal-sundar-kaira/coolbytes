import React from "react";
import Navbar from "./Navbar";
import food1 from './food1.jpg'
import food2 from './food2.jpg'
import Addnotes from './Addnotes'
const About = () => {
  return (
    <>
      <div>
        <Navbar/>
        <div className="container justify-center items-center">
          <div className="row ">
            <div className="col text-[20px] font-bold">
              <h1>Uneaten Catering</h1>
            </div>
          </div>
          <div className="row mx-auto">
            <div className="col">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={food1}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={food2}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={food1}
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <h2>Connect with us and we will get your excess food</h2>
          </div>
          <div className="row">
            <div className="col-2">
              {/* <!-- <button type="button" className="btn btn-outline-secondary">Know more</button> --> */}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="card">
              <div className="card-header">Did you know?</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  The annual value of food wasted globally is $1 trillion, and
                  it weighs about 1.3 billion tonne{" "}
                </li>
                <li className="list-group-item">
                  Almost half of all the fruits and vegetables produced are
                  wasted
                </li>
                <li className="list-group-item">
                  We use 25 percent of the world's fresh water supply to grow
                  food that is never eaten
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;
