import Img2 from "../../public/assets/image2.jpg"
import { useEffect } from 'react';
import AOS from 'aos';
import '../dist/aos.css';
const Mailstone = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
    <div className=" bg-fixed bg-no-repeat bg-cover relative pb-20" style={{ backgroundImage: `url(${Img2})` }}>
      <div className="relative z-10">
        <div data-aos="fade-up" className="text-8xl lg:text-7xl lg:py-20 font-bold text-center py-10 text-white">Our <span
            className="text-Orange">Milestone</span></div>
        {/* table */}
        <div className="grid grid-cols-5 lg:grid-cols-7">
            
          {/* head */}
          <div  className="hidden lg:block col-span-3"></div>
          <div className="">
            <div data-aos="fade-up" className="bg-Orange h-20 lg:h-16 w-20 lg:w-16 rounded-full mx-auto"></div>
            <div data-aos="fade-up"  className="bg-green-600 h-40 lg:h-20 w-4 lg:w-2 mx-auto"></div>
          </div>
          <div className=" col-span-4 lg:col-span-3">
          </div>

          {/* bulat */}
          <div className="hidden lg:block col-span-3"></div>
          <div className="">
            <div data-aos="fade-up" className="bg-Orange h-20 w-20 rounded-full mx-auto my-1"></div>
          </div>
          <div data-aos="fade-up" className=" col-span-4 lg:col-span-3 items-center flex">
            <div data-aos="fade-left"  className="text-5xl">2023</div>
          </div>

          {/* text */}
          <div className=" hidden lg:block col-span-3"></div>
          <div className="">
            <div data-aos="fade-up" className="bg-green-600 h-full w-4 lg:w-2 mx-auto">
            </div>
          </div>
          <div className=" col-span-4 lg:col-span-3">
            <div data-aos="fade-up" className="w-0 h-0 border-solid border-t-16 border-r-32 border-b-0 border-l-32 border-pink-500"></div>
            <div data-aos="fade-left" className="bg-white mt-5 rounded-xl mx-4 lg:mx-0 lg:me-2 p-10 mb-10 text-4xl lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolore, inventore. Doloribus numquam porro voluptatem libero temporibus consectetur quos sed natus
              aliquam? In, quae corporis perferendis atque fuga beatae unde exercitationem!</div>
          </div>
          {/* end */}

          {/* bulat */}
          <div className="hidden lg:block col-span-3">
          <div data-aos="fade-right" className="text-5xl hidden lg:block text-right">2024</div>
          </div>
          <div className="">
            <div data-aos="fade-up" className="bg-Orange h-20 w-20 rounded-full mx-auto my-1"></div>
          </div>
          <div className=" col-span-4 lg:col-span-3 items-center flex">
            <div data-aos="fade-left" className="text-5xl lg:hidden ">2024</div>
          </div>

          {/* text */}
          <div className=" hidden lg:block col-span-3">
          <div data-aos="fade-right" className="bg-white mt-5 rounded-xl ms-4  p-10 mb-10 text-xl  hidden lg:block">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolore, inventore. Doloribus numquam porro voluptatem libero temporibus consectetur quos sed natus
              aliquam? In, quae corporis perferendis atque fuga beatae unde exercitationem!</div>
          </div>
          <div className="">
            <div data-aos="fade-up" className="bg-green-600 h-full w-4 lg:w-2 mx-auto">
            </div>
          </div>
          <div className=" col-span-4 lg:col-span-3">
            <div data-aos="fade-up" className="w-0 h-0 border-solid border-t-16 border-r-32 border-b-0 border-l-32 border-pink-500"></div>
            <div data-aos="fade-left" className="bg-white mt-5 rounded-xl mx-4 lg:mx-0 lg:me-2 p-10 mb-10 text-4xl lg:text-xl lg:hidden">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolore, inventore. Doloribus numquam porro voluptatem libero temporibus consectetur quos sed natus
              aliquam? In, quae corporis perferendis atque fuga beatae unde exercitationem!</div>
          </div>
          {/* end */}

          {/* bulat */}
          <div className="hidden lg:block col-span-3"></div>
          <div className="">
            <div data-aos="fade-up" className="bg-Orange h-20 w-20 rounded-full mx-auto my-1"></div>
          </div>
          <div className=" col-span-4 lg:col-span-3 items-center flex">
            <div data-aos="fade-left" className="text-5xl">2024</div>
          </div>

          {/* text */}
          <div className=" hidden lg:block col-span-3"></div>
          <div className="">
            <div data-aos="fade-up" className="bg-green-600 h-full w-4 lg:w-2 mx-auto">
            </div>
          </div>
          <div className=" col-span-4 lg:col-span-3">
            <div data-aos="fade-up" className="w-0 h-0 border-solid border-t-16 border-r-32 border-b-0 border-l-32 border-pink-500"></div>
            <div data-aos="fade-left" className="bg-white mt-5 rounded-xl mx-4 lg:mx-0 lg:me-2 p-10 mb-10 text-4xl lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolore, inventore. Doloribus numquam porro voluptatem libero temporibus consectetur quos sed natus
              aliquam? In, quae corporis perferendis atque fuga beatae unde exercitationem!</div>
          </div>
          {/* end */}

          {/* ekor */}
           <div className="hidden lg:block col-span-3"></div>
          <div className="">
            <div data-aos="fade-up" className="bg-green-600 h-1 w-4 lg:w-2 lg:h-10 mx-auto"></div>
            <div data-aos="fade-up" className="bg-Orange h-20 w-20 lg:h-16 lg:w-16 rounded-full mx-auto"></div>
          </div>
          <div className=" col-span-4 lg:col-span-3">
          </div>


        </div>
      </div>
      <div className="absolute inset-0 bg-Pink opacity-70 z-0"></div>
    </div>
    </>
  )
}

export default Mailstone