import capstone from "../assets/capstone.webp";
import todo from "../assets/todo.webp";
import pokedex from "../assets/pokedex.webp";
import listing from "../assets/listing.webp";

export const works = Object.freeze([
  {
    title:
      "Online Certificate Request with Management System for Barangay Bigaa (Capstone Project)",
    image: capstone,
    tech_stack: ["HTML", "CSS", "PHP", "JAVASCRIPT", "MY SQL"],
    repo: "",
    live: ""
  },
  {
    title: "Simple Todo List",
    image: todo,
    tech_stack: ["REACT JS", "FRAMER MOTION", "CONTEXT API"],
    repo: "https://github.com/arwnchrstn/simple-todo",
    live: "https://simple-todo-arwnchrstn.vercel.app/"
  },
  {
    title: "React JS Pokedex",
    image: pokedex,
    tech_stack: ["REACT JS", "CONTEXT API", "AXIOS"],
    repo: "https://github.com/arwnchrstn/simple-pokedex",
    live: "https://pokedex-arwnchrstn.vercel.app"
  },
  {
    title: "Simple Listing App (Bayan Academy Training Final Project)",
    image: listing,
    tech_stack: [
      "MERN STACK",
      "CONTEXT API",
      "AXIOS",
      "POSITION STACK (GEOCODING API)",
      "LEAFLET JS (MAP API)"
    ],
    repo: "https://github.com/arwnchrstn/bayan-academy-backend-project",
    live: ""
  }
]);
