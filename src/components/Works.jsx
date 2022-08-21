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
                className="d-flex col-12 col-md-6 col-lg-4 mb-5"
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={200 + idx * 100}
              >
                <div className="card">
                  <img
                    src={work.image}
                    className="card-img-top img-fluid"
                    alt={work.title}
                  />

                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-bold">{work.title}</h6>

                    <div className="d-flex flex-wrap gap-2 mb-5 mt-1">
                      {work.tech_stack.map((tech, idx) => (
                        <small
                          key={idx}
                          className="bg-primary text-white rounded px-2"
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
                        className="btn btn-sm btn-outline-primary form-control mt-auto"
                        role="button"
                        onFocus={(e) => e.target.blur()}
                      >
                        Live View
                      </a>
                    ) : (
                      <p className="m-0 fw-bold text-center mt-2 mt-auto">
                        Live View Not Available
                      </p>
                    )}

                    {work.repo ? (
                      <a
                        href={work.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-primary form-control mt-2"
                        role="button"
                        onFocus={(e) => e.target.blur()}
                      >
                        View Source
                      </a>
                    ) : (
                      <p className="m-0 fw-bold text-center mb-2">
                        Source Not Available
                      </p>
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
