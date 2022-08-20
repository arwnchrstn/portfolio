import React from "react";
import contact from "../assets/contact.png";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact-section">
        <div className="container">
          <h4 className="text-center fw-bold text-primary" data-aos="fade-down">
            LET'S CONNECT
          </h4>

          <div className="row mt-4">
            <div
              className="col-md-6 d-flex align-items-center justify-content-center d-none d-md-flex"
              data-aos="zoom-in"
              data-aos-delay={1000}
            >
              <img
                src={contact}
                className="img-fluid"
                alt="contact"
                width="80%"
              />
            </div>

            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-delay={1000}
            >
              <a
                href="https://www.linkedin.com/in/arwenceres/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold d-flex align-items-center"
              >
                <BsLinkedin size={20} className="me-2" /> Arwen Christian Ceres
              </a>

              <a
                href="mailto:ceres703@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold d-flex align-items-center mt-2"
              >
                <MdAlternateEmail size={20} className="me-2" />{" "}
                ceres703@gmail.com
              </a>

              <a
                href="https://github.com/arwnchrstn"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold d-flex align-items-center mt-2"
              >
                <BsGithub size={20} className="me-2" /> arwnchrstn
              </a>

              <a
                href="https://www.facebook.com/arwnchrstn"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold d-flex align-items-center mt-2"
              >
                <BsFacebook size={20} className="me-2" /> Arwen Ceres
              </a>

              <div className="horizontal-divider my-4">
                <span className="hr-text fw-bold px-3">OR</span>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  className="form-control mt-2"
                  type="text"
                  name="name"
                  placeholder="Your Email"
                  required
                />

                <input
                  className="form-control mt-2"
                  type="text"
                  name="name"
                  placeholder="Email Subject (Optional)"
                />

                <textarea
                  className="form-control mt-2"
                  type="text"
                  name="name"
                  placeholder="Message"
                  required
                  rows={5}
                />

                <button
                  type="submit"
                  className="btn btn-primary mt-4 form-control"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
