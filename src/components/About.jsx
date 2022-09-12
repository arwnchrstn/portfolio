import React from "react";

import about from "../assets/about_me.webp";

const About = () => {
  return (
    <>
      <section className="about" id="about-section">
        <div className="container">
          <h4
            className="text-center text-primary fw-bold section-heading"
            data-aos="fade-down"
          >
            ABOUT ME
          </h4>

          <div className="row mt-4">
            <div className="col-md-6 d-flex justify-content-center align-items-center d-none d-md-flex">
              <img
                src={about}
                alt="about me"
                className="img-fluid"
                width="80%"
                data-aos="zoom-in"
                data-aos-delay={500}
              />
            </div>

            <div
              className="col-md-6 d-flex flex-column justify-content-center"
              data-aos="fade-left"
              data-aos-delay={500}
            >
              <p className="lh-lg">
                I am{" "}
                <span className="text-primary fw-bold">
                  Arwen Christian Ceres
                </span>
                , a fresh graduate of{" "}
                <span className="text-primary fw-bold">
                  Bachelor of Science in Information Technology
                </span>{" "}
                from Polytechnic University of the Philippines Santa Rosa
                Campus.
              </p>

              <p className="lh-lg">
                I am knowledgable in MERN Stack but I am willing to be trained
                and willing to learn new things. I am currently looking for{" "}
                <span className="text-primary fw-bold">
                  entry-level position
                </span>{" "}
                that suits my skills and experience. I am open for the positions
                of
                <span className="text-primary fw-bold">
                  {" "}
                  Back End Developer
                </span>
                ,
                <span className="text-primary fw-bold">
                  {" "}
                  Front End Developer
                </span>
                ,
                <span className="text-primary fw-bold">
                  {" "}
                  Full Stack Developer
                </span>
                , or
                <span className="text-primary fw-bold">
                  {" "}
                  Associate Software Engineer.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
