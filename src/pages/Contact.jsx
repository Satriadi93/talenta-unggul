import Layout from "./Layout";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoGlobe } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <Layout page="CONTACT">
        <div style={{ height: `calc(100vh - 5rem)` }} className="bg-gradient-to-r from-sky-400 to-indigo-500">
          <div className="grid grid-cols-4  h-1/2 ">
            <div className="">
              <div className="absolute h-20 w-20 bg-white rounded-full blur-2xl ms-40 "></div>
            </div>

            <div className="me-1 bg-white rounded-sm bg-opacity-30  w-full my-16 p-10 drop-shadow-2xl ">
              <p className="text-2xl font-Cursive ">Get in touch</p>
              <div className="flex-col flex my-2 ">
                <label htmlFor="name" className="text-white">
                  Your Name
                </label>
                <input type="text" id="name" className="rounded-md h-7 outline-none p-1 focus:ring-2 ring-sky-500 text-xs " placeholder="Full Name" />
              </div>
              <div className="flex-col flex my-2 ">
                <label htmlFor="email" className="text-white">
                  Your Email
                </label>
                <input type="email" id="email" className="rounded-md h-7 outline-none p-1 focus:ring-2 ring-sky-500 text-xs " placeholder="example@gmail.com" />
              </div>
              <div className="flex-col flex my-2 ">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea name="" id="message" className="rounded-sm text-xs p-1 outline-none focus:ring-2 ring-sky-400" cols="30" rows="10" placeholder="Enter your message here"></textarea>
              </div>
              <div className="">
                <button className="rounded-sm justify-center bg-orange-500 flex w-full py-1 text-white">Send Message</button>
              </div>
            </div>

              <div className="ms-1 bg-white rounded-sm bg-opacity-30  w-full my-16 p-10 drop-shadow-2xl ">
                <p className="text-2xl font-Cursive font-bold ">Office</p>
                <div className="mt-5">
                    <p className="font-bold text-orange-500 my-2">TALENTA UNGGUL INDONESIA</p>
                    <p>Jln. Raden Mas Panji Anom </p>
                    <p>Pagutan Timur Mataram 83127 Nusa Tenggara Barat</p>
                    <p className="mt-14 my-2 flex"><span className="my-auto me-3"><BsFillTelephoneFill/></span>+62 812-1006-794</p>
                    <p className="flex my-2"><span className="my-auto me-3"><MdEmail/></span>sales@talenta-unggul.com</p>
                    <p className="flex my-2"><span className="my-auto me-3"><IoGlobe/></span>www.talenta-unggul.com</p>
                </div>
              </div>

            <div className="">
              <div className=" h-20 w-10 bg-white rounded-full blur-2xl ms-40 mt-40 "></div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
