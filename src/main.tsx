import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { TourProvider } from "./contexts/TourContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TourProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TourProvider>
  </StrictMode>
);
