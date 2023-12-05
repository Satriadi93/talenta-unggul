import { useEffect } from 'react';
import AOS from 'aos';
import '../dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Service1 from '../../public/assets/service1.jpeg'
import Service2 from '../../public/assets/service2.jpg'
import Service3 from '../../public/assets/service3.jpg'
import Service4 from '../../public/assets/service4.jpg'


const Business = () => {
useEffect(() => {
AOS.init({
duration: 1000,
easing: 'ease-in-out',
});
}, []);
return (
        <>
          <div className="w-3/4 mx-auto mb-40">
            <h1 data-aos="slide-right" className='text-4xl font-bold text-center mt-10  '>Our <span
                className='text-Orange'>Business</span> </h1>

            <div className="card-parent mx-auto w-full flex mt-10 justify-center ">
            <Swiper
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={3}
                  spaceBetween={40}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay,Pagination, Navigation]}
                  className="mySwiper"
                >
                        {data.map((x) => (
                          <>
                            <SwiperSlide>
                                  <div key={x.title} className="card w-80 h-full nos-select  ">
                                    <div className="my-auto md:mx-10  lg:mx-0">
                                      <div className="overflow-auto my-auto rounded-lg h-60">
                                        <img src={x.img} alt="" className='w-full h-full object-cover ' />
                                      </div>
                                      <div className="Title mt-2 mb-10 text-center">{x.title}</div>
                                      <div className="mt-2 flex">
                                        <a href=""
                                          className="w-full m-auto text-white bg-Orange hover:bg-HoverOrange focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-2 py-2 text-center dark:text-white  ">
                                          LEARN MORE
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                  <br />
                              </SwiperSlide>
                              </> 
                        ))}
            </Swiper>
            </div>

          </div>
        </>
)

}
const data = [
  {
    title: 'Plan',
    img: Service1
  },{
    title: 'Economic Optimization',
    img: Service2
  },{
    title: 'Supervisory Control',
    img: Service3
  },{
    title: 'Base Control Layer',
    img: Service4
  },{
    title: 'I&C Infrestructure',
    img: Service1
  },{
    title: 'PROCESS',
    img: Service3
  }
]

export default Business