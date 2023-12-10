import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Product from "../Components/Product"
import Img3 from "../../public/assets/image3.jpg"
import Img5 from "../../public/assets/business.jpg"
import Img6 from "../../public/assets/business2.jpg"
import Img7 from "../../public/assets/business3.jpg"
import Img8 from "../../public/assets/business4.jpg"
import { useEffect } from 'react';
import AOS from 'aos';
import '../dist/aos.css';


const Businesspage = () => {
useEffect(() => {
AOS.init({
duration: 1000,
easing: 'ease-in-out',
});
}, []);
return (
<>
  <Navbar page='business' />
  <section>
    <div className="w-screen overflow-hidden relative">
      <img src={Img5} alt="" className="h-40vh object-cover brightness-50" />
      <p
        className="absolute drop-shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl lg:text-5xl font-bold text-center">
        Our Business</p>
    </div>


    <div className="bg-about bg-cover relative lg:pb-20">
      <div className="z-10">
        <div className="z-20  text-center py-10 text-4xl lg:text-xl lg:mx-32 text-black">
          Welcome to Talenta Unggul, where we take pride in offering comprehensive solutions that redefine
          excellence in the field of industrial automation and control systems. Our commitment to innovation,
          reliability, and efficiency drives our business, and we are delighted to introduce you to the diverse range of
          services we provide under the umbrella of PLAN (Process, Economic Optimization, Supervisory Control, Base
          Control Layer, I&C Infrastructure).
        </div>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"
        className=" grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img8} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">PLAN</p>
            <p className="text-4xl lg:text-lg">Cyber security management, PEAR ERP tools, Asset condition monitoring (on
              premise/remote)</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Long-term financial</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Maintenance and resource planing</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Operating horizon: years ...</div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"
        className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img3} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">ECONOMIC OPTIMIZATION</p>
            <p className="text-4xl lg:text-lg">Alarm rationalization/management Production planning tools, historian
              Exaquantum/PI</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Economic optimization using static curves</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Meeting of the long-term limitations (technology,
                environmental)</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Operating horizon: days, weeks ...</div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"
        className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img6} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">SUPERVISORY CONTROL</p>
            <p className="text-4xl lg:text-lg">LNG operator training simulator, production log sheet, Database
              management, obsolesce management, PM</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Online process supervision</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Multivariate APC structures</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Soft computing and rule-based systems</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Operating horizon: minutes ...</div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"
        className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img7} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">BASE CONTROL LAYER</p>
            <p className="text-4xl lg:text-lg">Interlock test, pre-commissioning/commissioning, PLC, DCS, Fire and gas,
              vibration system, etc.</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Dynamic stabilization of PID control loops</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Setpoin tracking, disturbance and noise rejection</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Operating horizon: seconds ...</div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"
        className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img6} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">I&C INFRASTRUCTURE</p>
            <p className="text-4xl lg:text-lg">Calibration & loop check on various transmitter, PSVs pop test,
              ultrasonic, radar, process analyzer,laboratory setup & solution, ISO/IEC-17025 consultation</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Measurement and sensors</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Actuators and drives</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Operating horizon: seconds ...</div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"
        className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img6} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">PROCESS</p>
            <p className="text-4xl lg:text-lg">Calibration & loop check on various transmitter, PSVs pop test,
              ultrasonic, radar, process analyzer,laboratory setup & solution, ISO/IEC-17025 consultation</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Process</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Plan</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Installation</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-lg">Object</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-Pink opacity-50 lg:opacity-50 z-0 "></div>
    </div>
    <div className="h-1 w-full bg-Orange"></div>
    <Product />
    <Footer />
  </section>
</>
)
}

export default Businesspage