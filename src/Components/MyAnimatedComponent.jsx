import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedComponente = () => {
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: animatedRef.current,
              opacity: 1,
              translateY: 0,
              easing: 'easeInOutQuad',
              duration: 1000,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(animatedRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={animatedRef}
      style={{
        opacity: 0, // Awalnya set transparan
        transform: 'translateY(30px)', // Awalnya translasi ke bawah 30px
        transition: 'opacity 1s, transform 1s', // Efek transisi
      }}
    >
      Hello, Anime.js!
    </div>
  );
};

export default AnimatedComponente;
