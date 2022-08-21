import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import { options } from "../config/tsparticles_options";
import developer from "../assets/banner.webp";
import Particles from "react-tsparticles";
import cv from "../cv/Arwen Christian Ceres - Updated CV.pdf";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* Banner section */}
      <section className="banner" id="banner-section">
        {/* ts particles bg */}
        <Particles
          id="tsparticles-canvas"
          init={particlesInit}
          options={options}
        />

        {/* Waves */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`${
            window.innerWidth < 576 ? "0 0 1440 350" : "0 0 1440 230"
          }`}
          className="waves"
        >
          <path
            fill="#0D6EFD"
            fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,74.7C672,64,768,96,864,117.3C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,350L1392,350C1344,350,1248,350,1152,350C1056,350,960,350,864,350C768,350,672,350,576,350C480,350,384,350,288,350C192,350,96,350,48,350L0,350Z"
          ></path>
        </svg>

        <div className="container d-flex flex-column justify-content-center h-100">
          <div className="row">
            <div
              className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center"
              data-aos="fade-down"
            >
              <>
                <h1 className="fw-bold">
                  Hi, <span className="text-primary">I am</span>
                </h1>
                <h3>Arwen Christian Ceres</h3>
                <div style={{ height: "70px" }}>
                  <TypeAnimation
                    sequence={[
                      "Full Stack Web Developer",
                      3000,
                      "",
                      500,
                      "MERN Stack Developer",
                      3000,
                      "",
                      500
                    ]}
                    wrapper="h4"
                    repeat={Infinity}
                    speed={70}
                    className="text-primary fw-bold"
                  />
                </div>

                <div className="mt-2">
                  <a
                    href="https://github.com/arwnchrstn"
                    target="_blank"
                    rel="noreferrer"
                    role="button"
                    className="btn btn-outline-primary px-4 mx-1 mt-1"
                    onFocus={(e) => e.target.blur()}
                    data-aos="fade-up"
                    data-aos-delay={1500}
                  >
                    Github
                  </a>

                  <a
                    href={cv}
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary px-4 mx-1 mt-1"
                    onFocus={(e) => e.target.blur()}
                    data-aos="fade-up"
                    data-aos-delay={2000}
                    download="Arwen Christian Ceres - CV"
                  >
                    Download CV
                  </a>
                </div>
              </>
            </div>

            <div className="col-md-6 text-center mt-5 mt-md-0 d-none d-md-block">
              <img
                src={developer}
                alt="web developer"
                className="img-fluid banner-img"
                width="80%"
                data-aos="zoom-in-up"
                data-aos-delay={800}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
