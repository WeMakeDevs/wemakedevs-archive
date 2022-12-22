import { useEffect, useRef, useState } from 'react';

export const useWindowScrolling = () => {
  const [direction, setDirection] = useState(undefined);
  const [scrollTop, setScrollTop] = useState(0);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY.current ? 'down' : 'up';

      if (scrollY < 0) {
        ticking.current = false;
        return;
      }

      if (Math.abs(scrollY - lastScrollY.current) < 0) {
        ticking.current = false;
        return;
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking.current = false;

      setDirection(direction);
      setScrollTop(scrollY);
    };

    const handleScroll = () => {
      updateScrollDir();
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [direction, scrollTop];
};
