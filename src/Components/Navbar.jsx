import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaLinkedinIn, FaUser } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import Logo from '../../public/assets/logo.png';

const Navbar = (probs) => {
  const pages = ['','','','','',''] 
  if (probs.page === 'home') {
    pages[0] = 'text-black bg-Orange lg:bg-Pink lg:text-Orange lg:border-b lg:border-Orange'
  } else if (probs.page === 'about') {
    pages[1] = 'text-black bg-Orange lg:bg-Pink lg:text-Orange lg:border-b lg:border-Orange'
  }else if (probs.page === 'business') {
    pages[2] = 'text-black bg-Orange lg:bg-Pink lg:text-Orange lg:border-b lg:border-Orange'
  }else if (probs.page === 'article') {
    pages[3] = 'text-black bg-Orange lg:bg-Pink lg:text-Orange lg:border-b lg:border-Orange'
  }else if (probs.page === 'carrier') {
    pages[4] = 'text-black bg-Orange lg:bg-Pink lg:text-Orange lg:border-b lg:border-Orange'
  }else if (probs.page === 'contact') {
    pages[5] = 'text-black bg-Orange lg:bg-Pink lg:text-Orange lg:border-b lg:border-Orange'
  }
  const navigate = useNavigate()
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

      <nav className="sticky top-0 z-50  ">
        <div className="flex lg:hidden bg-Pink">
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
          <div className="h-1 bg-Pink  drop-shadow-2xl lg:hidden "></div>
        <div
          id="menu"
          className={`relative ${
            isMenuVisible ? 'block  ' : 'hidden  lg:block '
          }z-10 py-1  bg-white w-full lg:h-full text-black lg:py-auto lg:bg-Pink lg:flex lg:place-content-center lg:gap-x-10 transition-transform duration-300 ease-in-out no-select`}
        >
          <div onClick={() => navigate('/')} className={`my-4 text-center text-5xl py-8 cursor-pointer   lg:bg-Pink lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0  hover:text-Orange ease-in duration-200 h-full  lg:hover:animate-bounce ${pages[0]}`}><p className={`lg:h-16 lg:flex items-center lg:justify-center transition-transform duration-300 ease-in-out `}>HOME</p></div>
          <div onClick={() => navigate('/about')} className={`my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0 lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce ${pages[1]}`}><p className={`lg:h-16 lg:flex items-center lg:justify-center transition-transform duration-300 ease-in-out `}>ABOUT</p></div>
          <div onClick={() => navigate('/business')} className={`my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0 lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce ${pages[2]}`}><p className={`lg:h-16 lg:flex items-center lg:justify-center transition-transform duration-300 ease-in-out `}>OUR BUSINESS</p></div>
          <div className=" text-center text-5xl  cursor-pointer  hidden lg:block">
            <img src={Logo} alt="Logo" width={100} />
          </div>
          <div onClick={() => navigate('/article')} className={`my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0  lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce ${pages[3]}`}><p className={`lg:h-16 lg:flex items-center lg:justify-center transition-transform duration-300 ease-in-out `}>ARTICLE</p></div>
          <div onClick={() => navigate('/carrier')} className={`my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0  lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce ${pages[4]}`}><p className={`lg:h-16 lg:flex items-center lg:justify-center transition-transform duration-300 ease-in-out `}>CARRIER</p></div>
          <div onClick={() => navigate('/contact')} className={`my-4 text-center text-5xl py-8 cursor-pointer hover:bg-Orange hover:text-white lg:my-auto lg:text-xl lg:hover:bg-Pink lg:py-0  lg:hover:text-Orange ease-in duration-200 lg:hover:animate-bounce ${pages[5]}`}><p className={`lg:h-16 lg:flex items-center lg:justify-center transition-transform duration-300 ease-in-out `}>KONTAK</p></div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
