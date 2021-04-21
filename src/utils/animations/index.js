export const animationOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const animationTwo = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: '-100vh',
    scale: 0.3,
  },
};

export const animationThree = {
  in: {
    opacity: 1,
    x: -300,
  },
  out: {
    opacity: 0,
    x: 300,
    transition: { bounce: false },
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

export const transition = {
  duration: 2,
  ease: [0.43, 0.13, 0.23, 0.96],
  bounce: false,
};

export const cardList = {
  in: {
    opacity: 0,
  },
  out: {
    opacity: 1,
    transition: {
      ...transition, duration: 0.9, delayChildren: 0.2, staggerChildren: 0.1,
    },
  },

  end: {
    transition: {
      ...transition, duration: 0.10, delayChildren: 0.16, staggerChildren: 0.5,
    },
  },
};

export const card = {
  in: { x: 500, opacity: 0 },
  out: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  end: { x: -500, opacity: 0 },
};
