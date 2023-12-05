import { FaPhoneAlt, FaLinkedinIn, FaUser  } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState('down');

  const handleWaypointEnter = () => {
    setScrollDirection('up');
  };

  const handleWaypointLeave = () => {
    setScrollDirection('down');
  };
  return (
    <Waypoint
      onEnter={handleWaypointEnter}
      onLeave={handleWaypointLeave}
    >
     <div className={`hidden lg:block transition-transform duration-300 ease-in-out transform ${
    scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
} `}>
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
    </Waypoint>
  )
}

export default Header