import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AnimatedRoutes } from "./routes";
import { OnboardingProvider } from "./Onboarding";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <OnboardingProvider>
        <AnimatedRoutes />
      </OnboardingProvider>
    </BrowserRouter>
  </StrictMode>,
);
