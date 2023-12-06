import { useState } from 'react';
import { FaPhoneAlt, FaLinkedinIn, FaUser } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import Logo from '../../public/assets/logo.png';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const onToggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
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

      <nav className="sticky top-0 z-50 ">
        <div className="flex lg:hidden">
          <div className="w-4/5 cursor-pointer lg:hidden ps-20 pt-1">
            <img src={Logo} alt="Logo" width={200} />
          </div>
          <div id="button" onClick={onToggleMenu} className="m-auto transition-transform duration-300 ease-in-out">
            {isMenuVisible ? (
              <CgClose className="text-7xl" />
            ) : (
              <GiHamburgerMenu className="text-7xl" />
            )}
          </div>
        </div>
          <div className="h-1  drop-shadow-2xl lg:invisible "></div>
        <div
          id="menu"
          className={`${
            isMenuVisible ? 'visible ' : 'invisible lg:visible'
          } py-1  bg-white w-full lg:h-full text-black lg:py-auto lg:bg-Pink lg:flex lg:place-content-center lg:gap-x-10 transition-transform duration-300 ease-in-out`}
        >
          <div className="my-4 text-center text-5xl py-8 cursor-pointer bg-Orange text-white lg:bg-Pink lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0  hover:text-Orange ease-in duration-200 h-full  lg:hover:animate-bounce lg:text-Orange"><p className='lg:h-16 lg:flex lg:items-center lg:justify-center'>HOME</p></div>
          <div className="my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0   lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce "><p className='lg:h-16 lg:flex items-center lg:justify-center'>ABOUT</p></div>
          <div className="my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0  lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce"><p className='lg:h-16 lg:flex items-center lg:justify-center'>OUR BUSINESS</p></div>
          <div className=" text-center text-5xl  cursor-pointer  hidden lg:block">
            <img src={Logo} alt="Logo" width={100} />
          </div>
          <div className="my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0  lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce"><p className='lg:h-16 lg:flex items-center lg:justify-center'>ARTICLE</p></div>
          <div className="my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0  lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce"><p className='lg:h-16 lg:flex items-center lg:justify-center'>CARRIER</p></div>
          <div className="my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0  lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce"><p className='lg:h-16 lg:flex items-center lg:justify-center'>KONTAK</p></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
