import Banner from '../assets/banner2.jpg';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import '../dist/aos.css';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const Hse = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya akan diputar sekali
  });

  const roundLogRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (inView && !hasPlayed) {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
      });

      anime({
        targets: roundLogRef.current,
        innerHTML: [0, 17281],
        easing: 'linear',
        round: 10,
        duration:2000
      });

      setHasPlayed(true);
      // Tambahkan logika atau panggilan fungsi animasi di sini
    }
  }, [inView, hasPlayed]);

  return (
    <div className='relative w-full'>
      <div className='absolute left-32 top-1/2 transform -translate-y-1/2 '>
        <p data-aos="zoom-in" className='text-white text-3xl font-bold'>WITHOUT A RECORDABLE ACCIDENT,</p>
        <p data-aos="zoom-in" className='mt-2 text-white text-3xl font-bold'>SAFETY BEGINS WITH YOU</p>
      </div>
      <div className='absolute right-48 top-1/2 transform -translate-y-1/2 '>
        <p data-aos="zoom-in" className='text-white text-lg text-center mb-10'>HSE Meter</p>
        <p  ref={roundLogRef} className='text-5xl text-Orange font-bold'></p>
        <p data-aos="zoom-in" className='mt-10 text-lg text-white text-center'>Manhours</p>
      </div>

      <img src={Banner} alt="" className='w-full' ref={ref} />
    </div>
  );
}

export default Hse;
