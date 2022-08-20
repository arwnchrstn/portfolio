import React, { useState, useEffect } from "react";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const setOpaque = () => {
      if (window.scrollY >= 140) {
        setIsOpaque(true);
      } else {
        setIsOpaque(false);
      }
    };
    window.addEventListener("scroll", setOpaque);

    return () => {
      window.removeEventListener("scroll", setOpaque);
    };
  }, []);

  useEffect(() => {
    isNavActive
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [isNavActive]);

  return (
    <>
      <header
        className={`position-fixed w-100 py-2 ${
          isOpaque ? "is-opaque" : "not-opaque"
        }`}
      >
        <div className="container">
          <nav className="d-flex justify-content-between">
            <a
              href="#banner-section"
              className="m-0 fs-5 fw-bold d-flex align-items-center text-primary text-decoration-none"
            >
              <IoPersonCircle className="me-1" size={25} /> arwnchrstn
            </a>

            <div
              className={`menu-backdrop ${isNavActive ? "active" : "inactive"}`}
              onClick={() => setIsNavActive(false)}
            ></div>

            <ul
              className={`fw-bold d-flex nav-menu m-0 p-0 gap-4 align-items-center text-primary ${
                isNavActive ? "active" : ""
              }`}
              onClick={() => setIsNavActive(false)}
            >
              <li>
                <a href="#about-section">About</a>
              </li>
              <li>
                <a href="#services-section">Services</a>
              </li>
              <li>
                <a href="#skills-section">Skills</a>
              </li>
              <li>
                <a href="#works-section">Works</a>
              </li>
              <li>
                <a href="#contact-section">Contact</a>
              </li>
            </ul>

            <div
              className="menu-toggle d-flex d-md-none"
              onClick={() => setIsNavActive(!isNavActive)}
            >
              <div className={`${isNavActive ? "active" : ""}`}></div>
              <div className={`${isNavActive ? "active" : ""}`}></div>
              <div className={`${isNavActive ? "active" : ""}`}></div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
