import React, { useCallback } from "react";

import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";

import { options } from "../config/tsparticles_options";
import developer from "../assets/banner.webp";
import cv from "../cv/Arwen Christian Ceres - CV.pdf";

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

        <div className="container d-flex flex-column justify-content-center h-100">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-down"
            >
              <div className="align-self-lg-center">
                <h1 className="fw-bold">
                  Hi, <span className="text-primary">I am</span>
                </h1>
                <h3>Arwen Christian Ceres</h3>
                <div style={{ height: "70px", width: "280px" }}>
                  <TypeAnimation
                    sequence={[
                      "Aspiring Full Stack Developer",
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
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-md-0 d-none d-lg-block">
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
