import { useState, useEffect } from 'react';

const useResponsiveScreen = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // For call the function handle resize and have the width and height constantly
  useEffect(() => {
    // https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return { width, height };
};

export default useResponsiveScreen;
