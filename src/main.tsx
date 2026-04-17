import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Shell from "./Shell.tsx";
import Record from "./Record.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/speak" element={<Record />} />
        {/* <Route path="/speak" element={<Shell />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
