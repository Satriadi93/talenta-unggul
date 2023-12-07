import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Img3 from "../../public/assets/image3.jpg"
import Img5 from "../../public/assets/business.jpg"
import Img6 from "../../public/assets/business2.jpg"
import Img7 from "../../public/assets/business3.jpg"
import Img8 from "../../public/assets/business4.jpg"


const Carrierpage = () => {
  return (
    <>
  <Navbar page='carrier' />
  <section>
    <div className="w-screen overflow-hidden relative">
      <img src={Img5} alt="" className="h-40vh object-cover brightness-50" />
      <p
        className="absolute drop-shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl lg:text-5xl font-bold text-center">
       Carrier</p>
    </div>


    <div className="bg-about bg-cover relative lg:pb-20" >
      <div className="z-10">
      <div className="z-20 mx-20 text-center py-10 text-4xl lg:text-xl text-black">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos in quo hic, recusandae cum obcaecati
        molestiae rem modi error dolorem deleniti saepe! At rem nisi corporis molestiae suscipit, doloribus
        iure.<br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem et iusto recusandae iste
        expedita earum beatae eum temporibus illo praesentium alias minus odio a doloremque vitae eos, blanditiis non.
      </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img8} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">PLAN</p>
            <p className="text-4xl lg:text-xl">Cyber security management, PEAR ERP tools, Asset condition monitoring (on premise/remote)</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Long-term financial</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Maintenance and resource planing</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Operating horizon: years ...</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img3} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">ECONOMIC OPTIMIZATION</p>
            <p className="text-4xl lg:text-xl">Alarm rationalization/management Production planning tools, historian Exaquantum/PI</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Economic optimization using static curves</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Meeting of the long-term limitations (technology, environmental)</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Operating horizon: days, weeks ...</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img6} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">SUPERVISORY CONTROL</p>
            <p className="text-4xl lg:text-xl">LNG operator training simulator, production log sheet, Database management, obsolesce management, PM</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Online process supervision</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Multivariate APC structures</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Soft computing and rule-based systems</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Operating horizon: minutes ...</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img7} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">BASE CONTROL LAYER</p>
            <p className="text-4xl lg:text-xl">Interlock test, pre-commissioning/commissioning, PLC, DCS, Fire and gas, vibration system, etc.</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Dynamic stabilization of PID control loops</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Setpoin tracking, disturbance and noise rejection</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Operating horizon: seconds  ...</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img6} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">I&C INFRASTRUCTURE</p>
            <p className="text-4xl lg:text-xl">Calibration & loop check on various transmitter, PSVs pop test, ultrasonic, radar, process analyzer,laboratory setup & solution, ISO/IEC-17025 consultation</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Measurement and sensors</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Actuators and drives</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Operating horizon: seconds  ...</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20 py-20">
        <div className="">
          <img src={Img6} alt="" className="mx-auto rounded-xl drop-shadow-xl" />
        </div>
        <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
          <div className="mx-20 ">
            <p className="text-6xl text-Orange lg:my-0 my-10 lg:text-2xl">PROCESS</p>
            <p className="text-4xl lg:text-xl">Calibration & loop check on various transmitter, PSVs pop test, ultrasonic, radar, process analyzer,laboratory setup & solution, ISO/IEC-17025 consultation</p>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Process</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Plan</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Installation</div>
            </div>
            <div className="flex items-center my-5">
              <div className="w-5 h-5 rounded-full bg-Orange"></div>
              <div className=" ms-5 text-3xl lg:text-xl">Object</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-Pink opacity-50 lg:opacity-50 z-0 "></div>
    </div>


  </section>
  <Footer />
</>
  )
}

export default Carrierpage