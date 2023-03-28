// eslint-disable-next-line
import clsxm from '@/lib/utils';
import { useEffect, useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
export default function ScrollToTop() {
  const [goToTop, setgoToTop] = useState(false);
  const showBtn = () => {
    if (window.scrollY > 200) {
      setgoToTop(true);
    } else {
      setgoToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', showBtn);
    return () => {
      window.removeEventListener('scroll', showBtn);
    };
  }, []);

  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      onClick={toTop}
      aria-label='Click here to scroll to top'
      className={clsxm(
        'h1 fixed right-4 bottom-10 z-50 rounded-full bg-base-100 text-primary transition-all duration-300',
        goToTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      )}
    >
      <IoIosArrowDropupCircle />
    </button>
  );
}
