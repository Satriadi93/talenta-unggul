import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import {Autoplay, EffectCoverflow,Pagination, Navigation} from 'swiper/modules';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import Service1 from '../../public/assets/service1.jpeg';
import Service2 from '../../public/assets/service2.jpg';
import Service3 from '../../public/assets/service3.jpg';
import Service4 from '../../public/assets/service4.jpg';

const Business = () => {
  return (
    <>
    <section className="mb-50vh mt-20 no-select">
          <h1 className="text-center font-bold my-32 lg:my-16 text-8xl lg:text-5xl text-Orange">Our <span className="text-black">Business</span></h1>
      <div className="no-select">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={
              {
                rotate:0,
                stretch: 0,
                depth: 100,
                modifier: 2.5
              }
            }
            pagination={{el :'.swiper-pagination', clickable:true}}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable:true
            }
              
            }
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="swiper_container w-full   overflow-hidden "
          >
            <SwiperSlide className="w-40vh lg:w-60vh bg-Pink    ">
              <img src={Service1} alt="service" className="rounded-xl" />
              <p className="text-center text-5xl lg:text-xl py-16 lg:py-4 ">Plan</p>
              <p className="mt-10 mx-32 text-center bg-Orange rounded-md p-4 lg:p-2 text-white text-4xl lg:text-sm mb-5 cursor-pointer">Learn More</p>
            </SwiperSlide>
            <SwiperSlide className="w-40vh lg:w-60vh bg-Pink    ">
              <img src={Service2} alt="service" className="rounded-xl" />
              <p className="text-center text-5xl lg:text-xl py-16 lg:py-4 ">Economic Optimization</p>
              <p className="mt-10 mx-32 text-center bg-Orange rounded-md p-4 lg:p-2 text-white text-4xl lg:text-sm mb-5 cursor-pointer">Learn More</p>
            </SwiperSlide>
            <SwiperSlide className="w-40vh lg:w-60vh bg-Pink    ">
              <img src={Service3} alt="service" className="rounded-xl" />
              <p className="text-center text-5xl lg:text-xl py-16 lg:py-4 ">Supervisory Control</p>
              <p className="mt-10 mx-32 text-center bg-Orange rounded-md p-4 lg:p-2 text-white text-4xl lg:text-sm mb-5 cursor-pointer">Learn More</p>
            </SwiperSlide>
            <SwiperSlide className="w-40vh lg:w-60vh bg-Pink    ">
              <img src={Service4} alt="service" className="rounded-xl" />
              <p className="text-center text-5xl lg:text-xl py-16 lg:py-4 ">Base Control Layer</p>
              <p className="mt-10 mx-32 text-center bg-Orange rounded-md p-4 lg:p-2 text-white text-4xl lg:text-sm mb-5 cursor-pointer">Learn More</p>
            </SwiperSlide>
            <SwiperSlide className="w-40vh lg:w-60vh bg-Pink    ">
              <img src={Service3} alt="service" className="rounded-xl" />
              <p className="text-center text-5xl lg:text-xl py-16 lg:py-4 ">I&C Infrestructure</p>
              <p className="mt-10 mx-32 text-center bg-Orange rounded-md p-4 lg:p-2 text-white text-4xl lg:text-sm mb-5 cursor-pointer">Learn More</p>
            </SwiperSlide>
            <SwiperSlide className="w-40vh lg:w-60vh bg-Pink    ">
              <img src={Service2} alt="service" className="rounded-xl" />
              <p className="text-center text-5xl lg:text-xl py-16 lg:py-4 ">PROCESS</p>
              <p className="mt-10 mx-32 text-center bg-Orange rounded-md p-4 lg:p-2 text-white text-4xl lg:text-sm mb-5 cursor-pointer">Learn More</p>
            </SwiperSlide>

            <div className="slider-controler mt-10">
              <div className="swiper-button-prev slider-arrow px-10">
                  <RiArrowRightSLine className="w-40 h-40" name="arrow-back-outline my-auto" />
              </div>
              <div className="swiper-button-next slider-arrow px-10">
                  <RiArrowLeftSLine className="w-40 h-40" name="arrow-forward-outline" />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
      </div>
      </section>
    </>
  );
};

export default Business;
