import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Inicio from "./components/Inicio.tsx";
import Habilidades from "./components/Habilidades.tsx";
import Proyectos from "./components/Proyectos.tsx";
import Certificaciones from "./components/Certificaciones.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Inicio />
    <Habilidades />
    <Proyectos />
    <Certificaciones />
  </React.StrictMode>
);
