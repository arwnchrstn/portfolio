import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiPostman,
  SiBootstrap,
  SiReact,
  SiGithub,
  SiRedux
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

export const skills = Object.freeze([
  {
    id: 1,
    skill: "HTML",
    category: "frontend",
    image: SiHtml5
  },
  {
    id: 2,
    skill: "CSS",
    category: "frontend",
    image: SiCss3
  },
  {
    id: 3,
    skill: "JAVASCRIPT",
    category: "frontend",
    image: SiJavascript
  },
  {
    id: 6,
    skill: "NODE JS",
    category: "backend",
    image: SiNodedotjs
  },
  {
    id: 7,
    skill: "EXPRESS JS",
    category: "backend",
    image: SiExpress
  },
  {
    id: 16,
    skill: "JWT",
    category: "backend",
    image: SiJsonwebtokens
  },
  {
    id: 9,
    skill: "RESTFUL API",
    category: "backend",
    image: TbApi
  },
  {
    id: 5,
    skill: "REACT JS",
    category: "frontend",
    image: SiReact
  },
  {
    id: 17,
    skill: "REDUX TOOLKIT",
    category: "frontend",
    image: SiRedux
  },
  {
    id: 8,
    skill: "MONGO DB",
    category: "backend",
    image: SiMongodb
  },
  {
    id: 13,
    skill: "POSTMAN",
    category: "other",
    image: SiPostman
  },
  {
    id: 4,
    skill: "BOOTSTRAP",
    category: "frontend",
    image: SiBootstrap
  },
  {
    id: 12,
    skill: "GITHUB",
    category: "other",
    image: SiGithub
  }
]);
