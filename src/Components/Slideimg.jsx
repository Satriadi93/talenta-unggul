import { useEffect, useState } from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import Slide1 from '../../public/assets/slider1.jpg';
import Slide2 from '../../public/assets/slider2.jpg';
import Slide3 from '../../public/assets/slider3.jpg';


const img = [Slide1, Slide2, Slide3];

const Slideimg = () => {
const [currentImage, setCurrentImage] = useState(0);

const nextImage = () => {
setCurrentImage((prevImage) => (prevImage + 1) % img.length);
};

const prevImage = () => {
setCurrentImage((prevImage) => (prevImage - 1 + img.length) % img.length);
};

useEffect(() => {
const id = document.getElementById("zoom-image");

const toggleZoom = () => {
  setCurrentImage((prevImage) => (prevImage + 1) % img.length);
  id.classList.add("zoomed");
  setTimeout(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % img.length);
    id.classList.remove("zoomed");
    }, 10000);
};
  toggleZoom();
  const intervalId = setInterval(() => {
      toggleZoom();
      }, 20000);
      return () => clearInterval(intervalId);
  }, []);



return (
<>
  <div className='h-slide z-20 top-2 relative  lg:h-128 overflow-hidden no-select'>
    <RiArrowLeftSLine
      className="hidden lg:block cursor-pointer absolute z-20 left-5 top-1/2 transform -translate-y-1/2 bg-black w-11 h-11 rounded-full bg-opacity-50 text-white hover:text-slate-400"
      onClick={prevImage} />
    <div className="absolute left-20 lg:left-40 z-20 top-1/2 transform -translate-y-1/2 text-white">
      {currentImage === 0 ? (
      <div><span className='text-8xl lg:text-4xl font-bold'>Excelent in</span> <br /> <span
          className='text-Orange text-8xl lg:text-4xl font-bold'>Oil and Gas</span> <span
          className='text-8xl lg:text-4xl font-bold'>Sector</span> <span className="text-2xl mt-32"><br />Reliable
          Partner in Energi Solutions</span></div>

      ) : currentImage === 1 ? (
      <div><span className='text-8xl lg:text-4xl font-bold'>Power and </span> <br /><span
          className='text-8xl lg:text-4xl font-bold text-Orange'>Renewable</span> <br /><span
          className='text-8xl lg:text-4xl font-bold'>Energy</span><br /> <span
          className="text-2xl mt-32"><br />Inovative solutions from end-to-end for grater efficiencies</span></div>
      ) : (
      <div><span className='text-Orange text-8xl lg:text-4xl font-bold'>Marine</span><br /><span
          className='text-8xl lg:text-4xl font-bold'>Industrial &</span> <br /><span
          className='text-8xl lg:text-4xl font-bold'>Manufacturing</span><br /><span
          className="text-2xl mt-32"><br />Enhance the performance of facilities improvement and bayond</span></div>
      )}
    </div>
    <img id='zoom-image' src={img[currentImage]} alt='' className='w-screen h-slide object-cover object-center z-20  ' />
    <RiArrowRightSLine
      className='hidden lg:block cursor-pointer absolute right-5 top-1/2 transform -translate-y-1/2 bg-black w-11 h-11 rounded-full bg-opacity-50 text-white hover:text-slate-400'
      onClick={nextImage} />
  </div>
</>
);
};

export default Slideimg;