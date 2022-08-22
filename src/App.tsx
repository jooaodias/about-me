import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HeaderMenu from './layout/Menu';

export default function Simple() {
  const location = useLocation();

  const goToHash = useCallback(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      elem?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [location]);

  useEffect(() => {
    goToHash();
  }, [goToHash]);

  return (
    <>
      <HeaderMenu />
      <LandingPage />
    </>
  );
}
