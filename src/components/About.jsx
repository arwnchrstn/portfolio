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
                width="65%"
                data-aos="zoom-in"
                data-aos-delay={500}
              />
            </div>

            <div
              className="col-md-6 d-flex flex-column justify-content-center"
              data-aos="fade-left"
              data-aos-delay={500}
            >
              <p className="text-justify">
                I am <span className="text-primary">Arwen Christian Ceres</span>
                , a fresh graduate of{" "}
                <span className="text-primary">
                  Bachelor of Science in Information Technology
                </span>{" "}
                from Polytechnic University of the Philippines Santa Rosa
                Campus.
              </p>

              <p className="text-justify">
                I am knowledgable in Front End Development and have basic
                knowledge in Back End Development but I am willing to be
                training and willing to learn new things. I am currently looking
                for entry level jobs that suits my skills and experience. I am
                open for positions of
                <span className="text-primary"> Web Developer</span>,
                <span className="text-primary"> Front End Developer</span>,
                <span className="text-primary"> Back End Developer</span>, and
                <span className="text-primary">
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
