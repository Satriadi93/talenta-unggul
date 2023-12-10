import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import ImgAbout from "../../public/assets/About1.jpg"
import Img3 from "../../public/assets/image3.jpg"
import Img4 from "../../public/assets/image4.jpg"
import Mailstone from "../Components/Mailstone"
import { useEffect } from 'react';
import AOS from 'aos';
import '../dist/aos.css';


const About = () => {
useEffect(() => {
AOS.init({
duration: 1000,
easing: 'ease-in-out',
});
}, []);
return (
<>
  <Navbar page='about' />
  <section>
    <div className="w-screen overflow-hidden relative">
      <img src={ImgAbout} alt="" className="h-40vh object-cover brightness-50" />
      <p
        className="absolute drop-shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl lg:text-5xl font-bold text-center">
        About Talenta Unggul</p>
    </div>
    <div className="bg-about bg-cover relative lg:pb-20" style={{ backgroundImage: `url(${Img4})` }}>
      <div className="lg:hidden relative z-10 text-center py-16 text-8xl lg:text-6xl font-bold text-white">
        About <span className="text-Orange">Us</span>
      </div>
      <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20">
        <div className="">
          <div className="hidden lg:block relative z-10 text-center py-5 text-6xl font-bold text-white">
            <div className="mb-5">About <span className="text-Orange">Us</span></div>
            <img src={Img3} alt="" className="mx-auto w-50vh rounded-xl" />
          </div>
          <img src={Img3} alt="" className="mx-auto rounded-xl lg:hidden" />
        </div>
        <div data-aos="zoom-in" className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="flex">
            <p className="m-20 lg:m-0 text-justify text-4xl lg:text-sm xl:text-xl lg:h-full lg:px-10">Established in
              2021 by the most experienced and ambitious Indonesian professional engineer from multi sector such as oil
              & gas, power generation, oleo chemical, pulp & paper and mining industry, we are specialist to supports
              client’s most need: professional engineer to support client’s project with a vision to be preferred
              regional player in to support national project development <br /><br />
              Our office location in Mataram, a capital city of West Nusa Tenggara in a beautiful Lombok island with
              spirit to develop local engineer
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-Pink opacity-50 lg:opacity-80 z-0 "></div>
    </div>
    <Mailstone />
    <div className="">
      <div className="text-8xl lg:text-6xl font-bold py-20 text-white text-center ">Our <span
          className="text-Orange">Credentials</span></div>
      <div className="flex gap-x-20 mb-20 justify-center">
        <img src={Img3} alt="" className="w-60 " />
        <img src={Img3} alt="" className="w-60 " />
        <img src={Img3} alt="" className="w-60 " />
      </div>
    </div>

  </section>
  <Footer />
</>
)
}

export default About