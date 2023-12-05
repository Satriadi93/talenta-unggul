import React, { useState, useEffect } from 'react';

import Logo from '../assets/logo.png';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isNavbarFixed = scrollPosition >= 15;

  return (
    <nav className="">
      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isNavbarFixed ? 'fixed top-0 opacity-100 translate-y-0' : ' opacity-100 -translate-y-15'
        } flex place-content-center gap-x-10 w-full text-black bg-Pink z-50`}
      >
        <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce text-Orange">HOME</div>
        <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce ">ABOUT</div>
        <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce">OUR BUSINESS</div>
        <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 ">
          
          <img src={Logo} alt="Logo" width={100} />
          
        </div>
        <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce">ARTICLE</div>
        <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce">CARRIER</div>
        <div className="my-auto cursor-pointer  hover:text-Orange ease-in duration-200 hover:animate-bounce">KONTAK</div>
      </div>
    </nav>
  );
};

export default Navbar;
