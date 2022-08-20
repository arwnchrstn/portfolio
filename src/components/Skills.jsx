import React, { useState } from "react";
import { skills } from "../config/skills";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { skillVariant } from "../config/framer_options";

const Skills = () => {
  const [skillsFilter, setSkillsFilter] = useState("");
  const filteredSkill = skills.filter((skill) =>
    skill.category.includes(skillsFilter)
  );
  return (
    <>
      <section className="skills" id="skills-section">
        <div className="container">
          <h4
            className="section-heading text-center text-primary fw-bold"
            data-aos="fade-down"
          >
            SKILLS AND KNOWLEDGE
          </h4>

          <div
            className="skills-nav d-flex gap-3 justify-content-center mt-4"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <p
              className={`m-0 text-primary ${
                skillsFilter === "" && "fw-bold filter-active"
              }`}
              onClick={() => setSkillsFilter("")}
            >
              All
            </p>
            <p
              className={`m-0 text-primary ${
                skillsFilter === "frontend" && "fw-bold filter-active"
              }`}
              onClick={() => setSkillsFilter("frontend")}
            >
              Front End
            </p>
            <p
              className={`m-0 text-primary ${
                skillsFilter === "backend" && "fw-bold filter-active"
              }`}
              onClick={() => setSkillsFilter("backend")}
            >
              Back End
            </p>
            <p
              className={`m-0 text-primary ${
                skillsFilter === "other" && "fw-bold filter-active"
              }`}
              onClick={() => setSkillsFilter("other")}
            >
              Others
            </p>
          </div>

          <div
            className="row justify-content-center mt-4"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <LayoutGroup>
              <motion.div
                className="col-12 col-md-9 d-flex gap-3 flex-wrap justify-content-center"
                layout
              >
                <AnimatePresence>
                  {filteredSkill.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className="skill-card border border-2 rounded d-flex flex-column align-items-center py-3 px-2"
                      variants={skillVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                    >
                      <img
                        src={skill.image}
                        alt={skill.skill}
                        className="img-fluid"
                        style={{ width: "70%", aspectRatio: "1/1" }}
                      />

                      <h6 className="mt-auto fw-bold m-0">{skill.skill}</h6>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
