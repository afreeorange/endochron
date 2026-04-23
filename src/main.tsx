import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router";
import { AnimatePresence, motion } from "motion/react";
import App from "./App.tsx";
import Record from "./Record.tsx";
import Days from "./Reflect/Days.tsx";
import Weeks from "./Reflect/Weeks.tsx";
import Years from "./Reflect/Years.tsx";
import Months from "./Reflect/Months.tsx";

const AnimatedRoutes = () => {
  const location = useLocation();
  const transitionKey = location.pathname.startsWith("/reflect/years")
    ? "/reflect/years"
    : location.pathname.startsWith("/reflect/months")
      ? "/reflect/months"
      : location.pathname.startsWith("/reflect/weeks")
        ? "/reflect/weeks"
        : location.pathname.startsWith("/reflect/days")
          ? "/reflect/days"
          : location.pathname;
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={transitionKey}>
        <Route element={<PageTransition />}>
          <Route path="/" element={<App />} />
          <Route path="/record" element={<Record />} />
          <Route path="/reflect/days" element={<Days />} />
          <Route path="/reflect/days/:date" element={<Days />} />
          <Route path="/reflect/weeks" element={<Weeks />} />
          <Route path="/reflect/weeks/:yearMonth" element={<Weeks />} />
          <Route path="/reflect/months" element={<Months />} />
          <Route path="/reflect/months/:yearMonth" element={<Months />} />
          <Route path="/reflect/years" element={<Years />} />
          <Route path="/reflect/years/:year" element={<Years />} />
          <Route path="*" element={<Navigate to="/" replace />} />
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
