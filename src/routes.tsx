import { Outlet, Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import type { ReactElement } from "react";
import App from "./App";
import Record from "./Record";
import Days from "./Reflect/Days";
import Weeks from "./Reflect/Weeks";
import Years from "./Reflect/Years";
import Months from "./Reflect/Months";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Support from "./Pages/Support";
import Colophon from "./Pages/Colophon";
import NotFound from "./Pages/404";
import Settings from "./Pages/Settings";
import Prepare from "./Prepare";

interface RouteDef {
  path: string;
  element: ReactElement;
}

export const ROUTES: RouteDef[] = [
  { path: "/", element: <App /> },
  { path: "/record", element: <Record /> },
  { path: "/reflect/days", element: <Days /> },
  { path: "/reflect/days/:date", element: <Days /> },
  { path: "/reflect/weeks", element: <Weeks /> },
  { path: "/reflect/weeks/:yearMonth", element: <Weeks /> },
  { path: "/reflect/months", element: <Months /> },
  { path: "/reflect/months/:yearMonth", element: <Months /> },
  { path: "/reflect/years", element: <Years /> },
  { path: "/reflect/years/:year", element: <Years /> },
  { path: "/terms", element: <Terms /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/support", element: <Support /> },
  { path: "/colophon", element: <Colophon /> },
  { path: "/reflect/any", element: <NotFound /> },
  { path: "/prepare", element: <Prepare /> },
  { path: "/settings", element: <Settings /> },
  { path: "*", element: <NotFound /> },
];

// Reflect sub-views share one animation key per section so navigating between
// e.g. /reflect/days and /reflect/days/:date doesn't re-trigger the page
// transition. Order is significant (longest-lived section wins first match).
const REFLECT_SECTIONS = ["years", "months", "weeks", "days"] as const;

export function transitionKey(pathname: string): string {
  for (const section of REFLECT_SECTIONS) {
    if (pathname.startsWith(`/reflect/${section}`))
      return `/reflect/${section}`;
  }
  return pathname;
}

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

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={transitionKey(location.pathname)}>
        <Route element={<PageTransition />}>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
