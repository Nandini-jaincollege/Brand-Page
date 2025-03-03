import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import HeroSection from "./components/Hero.jsx";
import Hero from "./components/Hero.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Hero />
  </StrictMode>
);
