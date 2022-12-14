import React, { useEffect, useState } from "react";

import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import countapi from "countapi-js";

const Jumbotron = () => {
  const [pageVisits, setPageVisits] = useState(undefined);

  useEffect(() => {
    countapi
      .hit(
        process.env.REACT_APP_COUNTAPI_NAMESPACE,
        process.env.REACT_APP_COUNTAPI_KEY
      )
      .then((result) => setPageVisits(result.value));
  }, []);

  return (
    <>
      <footer className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-white">
              <p className="fw-bold m-0">arwnchrstn</p>

              <div className="d-flex gap-3 justify-content-center my-3">
                <a
                  href="https://www.linkedin.com/in/arwenceres/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-white"
                >
                  <BsLinkedin size={30} className="me-2" />
                </a>

                <a
                  href="https://github.com/arwnchrstn"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-white"
                >
                  <BsGithub size={30} className="me-2" />
                </a>

                <a
                  href="https://www.facebook.com/arwnchrstn/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-white"
                >
                  <BsFacebook size={30} className="me-2" />
                </a>
              </div>
              <p className="m-0">
                &copy; {new Date().getFullYear()} Arwen Christian Ceres
              </p>
              <p className="m-0 mt-4 fw-bold">
                Total Page Visits: {pageVisits}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Jumbotron;
