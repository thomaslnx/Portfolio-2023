import MoveTo from './moveTo'

const pageScroll = (elements: NodeListOf<HTMLElement>) => {
  const sections = Array.from(elements);

  const easeFunctions = {
    easeInQuad(t: number, b: number, c: number, d: number) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad(t: number, b: number, c: number, d: number) {
      t /= d;
      return -c * t * (t - 2) + b;
    },
    easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    easeInOutCubic(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    },
  };


  const moveTo = new MoveTo(
    {
      tolerance: 0,
      duration: 1200,
      easing: 'easeInOutCubic',
      container: globalThis,
    },
    easeFunctions
  );

  sections.forEach((section) => {
    moveTo.registerTrigger(section);
  });
};

export default pageScroll;
