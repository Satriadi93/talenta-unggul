import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Contact from "../../public/assets/contact.jpg"

import { CiLocationOn } from "react-icons/ci";
import { BsTelephonePlus } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Contactpage = () => {
  return (
    <>
    <Navbar page='contact' />
    <section>
      <div className="w-full overflow-hidden relative">
        <img src={Contact} alt="" className="h-40vh w-screen object-cover brightness-50" />
        <p
          className="absolute drop-shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl lg:text-5xl font-bold text-center">
          Contact</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
        <div className="my-10">
          <div className="mx-20  text-center text-8xl lg:text-4xl my-10 font-bold">
              Get in <span className="text-Orange ">Touch</span> With <span className="text-Orange"> Us</span>
          </div>

          <div className="grid grid-cols-8 my-5 lg:my-0 mx-32">
            <div className=" justify-center items-center flex">
              <CiLocationOn className="w-20 h-20 lg:h-9 lg:w-9 text-Orange"/>
            </div>
            <div className="ps-1 my-10 lg:my-6 col-span-7 items-center flex text-3xl lg:text-sm"> Jln. Raden Mas Panji Anom Pagutan Timur Mataram 83127 Nusa Tenggara Barat</div>
          </div>

          <div className="grid grid-cols-8 my-5 lg:my-0 mx-32">
            <div className=" justify-center items-center flex">
              <BsTelephonePlus className="w-16 lg:w-6 lg:h-14 h-16 text-Orange"/>
            </div>
            <div className=" ps-1 my-10 lg:my-6 col-span-7 items-center flex text-3xl lg:text-sm">+62 812-1006-794</div>
          </div>

          <div className="grid grid-cols-8 my-5 lg:my-0 mx-32">
            <div className=" justify-center items-center flex">
              <MdOutlineMailOutline className="w-16 lg:w-6 lg:h-5 h-16 text-Orange"/>
            </div>
            <div className=" ps-1 my-10 lg:my-6 col-span-7 items-center flex text-3xl lg:text-sm">sales@talenta-unggul.com</div>
          </div>

        </div>
        <div className="mt-10 mb-32 ">
          <div className="mx-10 lg:me-40 lg:mb-0 lg:ms-0  bg-white drop-shadow-2xl lg:hover:drop-shadow-sm rounded-2xl p-10 ">
              <div className="grid grid-cols-2 ">
                <div className=" flex justify-center">
                  <input type="text" className="my-7 lg:my-3 shadow-inner rounded-lg w-4/5 h-24 focus:drop-shadow-sm  drop-shadow-2xl text-4xl  lg:p1 lg:text-sm lg:h-10 p-2 text-Orange focus:text-Orange outline-none" placeholder="First Name"/>
                </div>
                <div className="flex justify-center">
                  <input type="text" className="my-7 lg:my-3 shadow-inner rounded-lg w-full lg:w-4/5 h-24 focus:drop-shadow-sm  drop-shadow-2xl text-4xl  lg:p1 lg:text-sm lg:h-10 p-2 text-Orange  focus:text-Orange outline-none" placeholder="Last Name"/>
                </div>
              </div>
              <div className="flex justify-center">
                <input type="email" className="my-7 lg:my-3 shadow-inner rounded-lg w-full lg:w-4/5 h-24 focus:drop-shadow-sm  drop-shadow-2xl text-4xl  lg:p1 lg:text-sm lg:h-10 p-2 text-Orange  focus:text-Orange outline-none" placeholder="Email"/>
              </div>
              <div className="flex justify-center">
                <input type="number" className="my-7 lg:my-3 shadow-inner rounded-lg w-full lg:w-4/5 h-24 focus:drop-shadow-sm  drop-shadow-2xl text-4xl  lg:p1 lg:text-sm lg:h-10 p-2 text-Orange  focus:text-Orange outline-none" placeholder="Phone"/>
              </div>
              <div className="flex justify-center">
                <textarea type="number" className="my-7 lg:my-3 shadow-inner rounded-lg w-full lg:w-4/5 h-80 focus:drop-shadow-sm  drop-shadow-2xl text-4xl lg:p1 lg:text-sm lg:h-32 p-5 text-Orange  focus:text-Orange outline-none" placeholder="Message"/>
              </div>
              <div className="flex justify-center mx-24 ">
                <button className="animate-pulse w-full h-24 lg:h-10 bg-Orange rounded-2xl drop-shadow-2xl focus:drop-shadow-sm text-4xl lg:text-sm hover:bg-orange-400">Send Message</button>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-20">
        <div className="">
          <p className="text-center text-7xl lg:text-5xl font-bold text-white">Our <span className="text-Orange">Location</span></p>
        </div>
        <div className="w-full h-full overflow-hidden p-10 ">
          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13268.835185840579!2d116.11461990547366!3d-8.610559315336243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf3dd4ec810d%3A0x272c3abb93d452b2!2sJl.%20Raden%20Mas%20Panji%20Anom%2C%20Kec.%20Mataram%2C%20Kota%20Mataram%2C%20Nusa%20Tenggara%20Bar.%2083127!5e0!3m2!1sid!2sid!4v1702126313887!5m2!1sid!2sid"
                            className="w-40vh h-40vh mx-auto lg:w-100vh drop-shadow-2xl"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto my-20">
          <p className="text-5xl font-bold text-center ">OUR <span className="text-Orange">FOOT</span> PRINTS</p>
          <div className="peta">
            peta
          </div>
        </div>
      </div>
    
  
    <Footer />
    </section>
  </>
  )
}

export default Contactpage