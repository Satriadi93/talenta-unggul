import { FaPhoneAlt, FaLinkedinIn, FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from '../../public/assets/logo.png';

const Navbar = () => {
  return (
    <>
      <header >
        <div className="hidden  lg:block transition-transform duration-300 ease-in-out transform">
          <div className="bg-slate-800 gap-x-4 grid grid-flow-col auto-cols-max h-10 ps-10 text-slate-200 w-full">
            <div className="grid grid-flow-col auto-cols-max content-center">
              <div className="my-auto cursor-pointer text-Orange"><FaPhoneAlt/></div>
              <div className="ms-1 my-auto cursor-pointer text-sm hover:text-Orange">08772878777</div>
            </div>
            <div className="grid grid-flow-col auto-cols-max content-center">
              <div className="my-auto cursor-pointer text-Orange"><MdOutlineMailOutline size={23}/></div>
              <div className="ms-1 my-auto cursor-pointer text-sm hover:text-Orange">jasdjad@gmail</div>
            </div>
            <div className="grid grid-flow-col auto-cols-max content-center">
              <div className="my-auto cursor-pointer text-Orange"><FaLinkedinIn size={21}/></div>
              <div className="ms-1 my-auto cursor-pointer text-sm hover:text-Orange">Nama Linked</div>
            </div>
            <div className="grid grid-flow-col auto-cols-max content-center">
              <div className="my-auto cursor-pointer text-Orange"><FaUser size={19} /></div>
              <div className="ms-1 my-auto cursor-pointer text-sm hover:text-Orange">Staff Portal</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-50">
        <div className="flex place-content-center gap-x-10 w-full text-black bg-Pink  md:invisible lg:visible">
          <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 h-full  hover:animate-bounce text-Orange"><p className='h-20 flex items-center justify-center'>HOME</p></div>
          <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce "><p className='h-20 flex items-center justify-center'>ABOUT</p></div>
          <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce"><p className='h-20 flex items-center justify-center'>OUR BUSINESS</p></div>
          <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 ">
            <img src={Logo} alt="Logo" width={100} />
          </div>
          <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce"><p className='h-20 flex items-center justify-center'>ARTICLE</p></div>
          <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce"><p className='h-20 flex items-center justify-center'>CARRIER</p></div>
          <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce"><p className='h-20 flex items-center justify-center'>KONTAK</p></div>
        </div>
      </nav>
      
    </>
  );
};
export default Navbar;
