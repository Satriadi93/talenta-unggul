import Banner from '../../public/assets/banner2.jpg';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import '../dist/aos.css';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const Hse = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const roundLogRef = useRef(null);
  const roundLogRef2 = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (inView && !hasPlayed) {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
      });

      anime({
        targets: roundLogRef.current,
        innerHTML: [0, 17],
        easing: 'linear',
        round: 10,
        duration:2000
      });

      anime({
        targets: roundLogRef2.current,
        innerHTML: [0, 281],
        easing: 'linear',
        round: 10,
        duration:2000
      });

      setHasPlayed(true);
    }
  }, [inView, hasPlayed]);

  return (
    <div className='relative w-full h-70vh lg:h-full overflow-hidden'>
      <div className='absolute w-full lg:left-32 top-[400px] lg:top-1/2 transform -translate-y-1/2 '>
        <p data-aos="zoom-in" className='text-center lg:text-left  text-white text-7xl px-20 lg:px-0 lg:text-3xl font-bold'>WITHOUT A RECORDABLE ACCIDENT,</p>
        <p data-aos="zoom-in" className='text-center lg:text-left  mt-5 text-white text-7xl px-20 lg:px-0 lg:text-3xl font-bold'>SAFETY BEGINS WITH YOU</p>
      </div>
      <div className='absolute my-32 lg:my-0 w-full lg:w-32  lg:right-48 top-1/2 transform -translate-y-1/2 '>
        <p data-aos="zoom-in" className='text-white text-7xl lg:text-lg text-center mb-10'>HSE Meter</p>
        <div className="flex justify-center text-7xl lg:text-5xl text-Orange font-bold ">
        <p ref={roundLogRef}>0</p> <p >, </p> <p  ref={roundLogRef2} >0</p>
        </div>
        <p data-aos="zoom-in" className='mt-10 text-7xl lg:text-lg text-white text-center'>Manhours</p>
      </div>

      <img src={Banner} alt="" className='h-80vh lg:h-full object-cover object-center' ref={ref} />
    </div>
  );
}

export default Hse;
