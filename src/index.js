import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RecipeReact from "./components/RecipeReact";
import App1 from "./components/App1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecipeReact />
    {/* <App1/> */}
  </React.StrictMode>
);
