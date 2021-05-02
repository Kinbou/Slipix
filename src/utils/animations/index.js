export const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
  bounce: false,
};

export const animationOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      ...transition,
      when: 'afterChildren',
      duration: 0.5,
      delayChildren: 0.06,
      staggerChildren: 0.05,
    },
  },
};



export const animationModal = {
  in: {
    opacity: 0,
    scale: 0.2,
  },
  out: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
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

export const animationCardsPage = {
  in: {
    opacity: 0,
  },
  out: {
    opacity: 1,
  },
  end: {
    x: 300,
    opacity: 0,
    transition: { duration: 0.4 },
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


export const cardList = {
  in: {
    opacity: 0,
  },
  out: {
    opacity: 1,
    transition: {
      ...transition, duration: 0.3, delayChildren: 0.2, staggerChildren: 0.1,
    },
  },

  end: {
    opacity: 0,
    // transition: {
    //   ...transition, duration: 0.3, delayChildren: 0.2, staggerChildren: 0.1,
    // },
  },
};

export const card = {
  in: { x: 700, opacity: 0 },
  out: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  end: {
    x: -700,
    opacity: 0,
    // transition: {
    //   ...transition, duration: 0.3, delayChildren: 0.2, staggerChildren: 0.1,
    // },
  },
};
