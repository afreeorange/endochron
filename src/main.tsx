import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import { AnimatedRoutes } from "./routes";
import { OnboardingProvider } from "./Onboarding";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <OnboardingProvider>
        <AnimatedRoutes />
      </OnboardingProvider>
    </HashRouter>
  </StrictMode>,
);
