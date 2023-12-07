import Logo from '../../public/assets/logo.png';
import { useEffect } from 'react';
import AOS from 'aos';
import '../dist/aos.css';

const Visimisi = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        });
      }, []);
  return (
    <section  className="bg-gray-800 py-40 lg:py-2">
      <div data-aos="zoom-in" className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg className=" h-32 lg:h-11 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
          </svg>
          <blockquote>
            <div className="visi text-white mb-10  ">
              <p className='text-6xl lg:text-2xl text-Orange shakeX'>VISION</p>
              <p className="text-4xl my-9 lg:my-2 lg:text-2xl" >Contribute to national development in the modern industry</p>
            </div>
            <div className="misi my-10 text-white ">
              <p className='text-6xl lg:text-2xl text-Orange'>MISSION</p>
              <p className="text-4xl my-9 lg:my-2 lg:text-2xl" >Develop local/national engineer</p>
            </div>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-10  space-x-3">
            <img className="w-16 lg:w-6 rounded-full" src={Logo} alt="profile picture" />
            <div className="flex  items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-bold text-2xl lg:text-sm text-gray-500 ">Talenta <span className="pl-1 text-2xl lg:text-sm font-light text-Orange ">Unggul</span></div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Visimisi;
