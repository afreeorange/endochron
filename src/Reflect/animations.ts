// Shared motion/react variants for the Reflect views.

export const fadeAnim = {
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
  transition: { duration: 0.2, ease: "easeInOut" as const },
};

export const sectionContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const sectionItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
};

export const badgeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

export const badgeItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
};
