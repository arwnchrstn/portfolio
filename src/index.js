import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "aos/dist/aos.css";
import Aos from "aos";
Aos.init({ duration: 600, easing: "ease-out", once: true });
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const loader = (
  <div
    className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center bg-light"
    style={{ zIndex: 9999 }}
  >
    <div
      className="spinner-grow text-primary "
      style={{ width: "6rem", height: "6rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);
root.render(
  <>
    <Suspense fallback={loader}>
      <App />
    </Suspense>
  </>
);
