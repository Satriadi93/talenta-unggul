import React, { useEffect } from 'react';
import AOS from 'aos';
import '../dist/aos.css'; // Import file CSS AOS

const AnimatedComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: 'ease-in-out', // Pola percepatan animasi
    });
  }, []);

  return (
    <div data-aos="fade-up">
      AnimatedComponentjsx
    </div>
  );
};

export default AnimatedComponent;
