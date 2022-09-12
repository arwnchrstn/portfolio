import React, { useState } from "react";

import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import contact from "../assets/contact.webp";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const successEmail = () =>
    toast.success("Your message was sent. Thank you for reaching out.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  const errorEmail = () =>
    toast.error("An error occurred while sending your message.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSending(false);
          successEmail();
          e.target.reset();
        },
        (error) => {
          errorEmail();
          console.error(error.text);
        }
      );
  };
  return (
    <>
      <ToastContainer theme="colored" />

      <section className="contact" id="contact-section">
        <div className="container">
          <h4 className="text-center fw-bold text-primary" data-aos="fade-down">
            LET'S CONNECT
          </h4>

          <div className="row mt-4">
            <div
              className="col-md-6 d-flex align-items-center justify-content-center d-none d-md-flex"
              data-aos="zoom-in"
              data-aos-delay={500}
            >
              <img
                src={contact}
                className="img-fluid"
                alt="contact"
                width="80%"
              />
            </div>

            <div className="col-md-6" data-aos="fade-left" data-aos-delay={500}>
              <a
                href="https://www.linkedin.com/in/arwenceres/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold d-flex align-items-center"
              >
                <BsLinkedin size={20} className="me-2" /> Arwen Christian Ceres
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

              <form onSubmit={sendEmail}>
                <fieldset disabled={isSending}>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />

                  <input
                    className="form-control mt-2"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />

                  <input
                    className="form-control mt-2"
                    type="text"
                    name="subject"
                    placeholder="Email Subject (Optional)"
                  />

                  <textarea
                    className="form-control mt-2"
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                    rows={5}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary mt-4 form-control"
                  >
                    {!isSending && "Send Message"}
                    {isSending && (
                      <>
                        Sending...
                        <div
                          className="spinner-border spinner-border-sm ms-1"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </>
                    )}
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
