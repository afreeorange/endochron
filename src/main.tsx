import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router";
import { AnimatePresence, motion } from "motion/react";
import App from "./App.tsx";
import Record from "./Record.tsx";
import Daily from "./Reflect/Daily.tsx";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<PageTransition />}>
          <Route path="/" element={<App />} />
          <Route path="/record" element={<Record />} />
          <Route path="/reflect/daily" element={<Daily />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const PageTransition = () => (
  <motion.div
    style={{ height: "100%" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.18, ease: "easeInOut" }}
  >
    <Outlet />
  </motion.div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
);
