import React from "react";

import { works } from "../config/works";

const Works = () => {
  return (
    <>
      <section className="works" id="works-section">
        <div className="container">
          <h4 className="text-center text-primary fw-bold" data-aos="fade-down">
            MY WORKS
          </h4>

          <div className="row mt-4 px-0 px-md-5 justify-content-center">
            {works.map((work, idx) => (
              <div
                className="d-flex col-12 col-md-6 col-lg-4 mb-4"
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={200 + idx * 100}
              >
                <div className="card">
                  <img
                    src={work.image}
                    className="card-img-top img-fluid border-bottom border-1"
                    alt={work.title}
                  />

                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-bold text-center">
                      {work.title}
                    </h6>

                    <div className="d-flex flex-wrap gap-2 mb-5 mt-3 justify-content-center">
                      {work.tech_stack.map((tech, idx) => (
                        <small
                          key={idx}
                          className="bg-primary text-white rounded px-3"
                        >
                          {tech}
                        </small>
                      ))}
                    </div>

                    {work.live ? (
                      <a
                        href={work.live}
                        target="_blank"
                        rel="noreferrer"
                        role="button"
                        className="btn btn-sm btn-primary form-control mt-auto fw-bold"
                        onFocus={(e) => e.target.blur()}
                      >
                        Live View
                      </a>
                    ) : (
                      <button
                        className="btn btn-sm btn-primary form-control mt-auto fw-bold"
                        disabled
                      >
                        Live View Not Available
                      </button>
                    )}

                    {work.repo ? (
                      <a
                        href={work.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-primary form-control mt-2 fw-bold"
                        role="button"
                        onFocus={(e) => e.target.blur()}
                      >
                        View Source
                      </a>
                    ) : (
                      <button
                        className="btn btn-sm btn-outline-primary form-control mt-2 fw-bold"
                        disabled
                      >
                        Source Not Available
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
