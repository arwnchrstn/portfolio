import capstone from "../assets/capstone.webp";
import todo from "../assets/todo.webp";
import pokedex from "../assets/pokedex.webp";
import listing from "../assets/listing.webp";

export const works = Object.freeze([
  {
    title:
      "Online Certificate Request with Management System for Barangay Bigaa (Capstone Project)",
    image: capstone,
    tech_stack: ["HTML", "CSS", "BOOTSTRAP", "PHP", "JAVASCRIPT", "MY SQL"],
    repo: "https://github.com/arwnchrstn/capstone-project",
    live: ""
  },
  {
    title: "Simple Todo List",
    image: todo,
    tech_stack: [
      "BOOTSTRAP",
      "JAVASCRIPT",
      "REACT JS",
      "FRAMER MOTION",
      "CONTEXT API"
    ],
    repo: "https://github.com/arwnchrstn/simple-todo",
    live: "https://simple-todo-arwnchrstn.netlify.app/"
  },
  {
    title: "React JS Pokedex",
    image: pokedex,
    tech_stack: ["BOOTSTRAP", "REACT JS", "JAVASCRIPT", "CONTEXT API"],
    repo: "https://github.com/arwnchrstn/simple-pokedex",
    live: "https://pokedex-arwnchrstn.netlify.app/"
  },
  {
    title: "Simple Listing App (Bayan Academy Backend Training Final Project)",
    image: listing,
    tech_stack: ["MERN STACK", "POSITION STACK", "LEAFLET JS", "CONTEXT API"],
    repo: "https://github.com/arwnchrstn/bayan-academy-backend-project",
    live: "https://bayan-simple-listing.netlify.app/"
  }
]);
