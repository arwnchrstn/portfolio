import React from "react";
import { MdDevices } from "react-icons/md";
import { BsServer, BsCreditCard2Front } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <section
        className="services bg-primary text-white d-flex flex-column"
        id="services-section"
      >
        <div className="container my-auto">
          <h4 className="text-center fw-bold" data-aos="fade-down">
            WHAT I DO
          </h4>

          <div className="row mt-5 gap-3 justify-content-center">
            <div
              className="col-10 col-md-3 text-center border border-1 rounded p-3"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <MdDevices size={30} className="mb-3" />
              <h5 className="fw-bold">Responsive Web Design</h5>
              <p className="mt-3">
                Make sure that the web design is responsive and adapting to
                different screen size across different devices.
              </p>
            </div>

            <div
              className="col-10 col-md-3 text-center border border-1 rounded p-3"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <BsCreditCard2Front size={30} className="mb-3" />
              <h5 className="fw-bold">Front End Development</h5>
              <p className="mt-3">
                Turning web designs and mockups into interactive and responsive
                website using Javascript and React JS. Consuming APIs to display
                data to the UI.
              </p>
            </div>

            <div
              className="col-10 col-md-3 text-center border border-1 rounded p-3"
              data-aos="zoom-in"
              data-aos-delay={600}
            >
              <BsServer size={30} className="mb-3" />
              <h5 className="fw-bold">Back End Development</h5>
              <p className="mt-3">
                Creating and setup back end API endpoints, routes, and database
                models using Express JS, Node JS, Mongo DB, and adding
                authentication using JWT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
