import React from 'react';
import Aboutimg from '../assets/oil.jpg';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';
import Icon4 from '../assets/icon4.png';
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
<div className='w-3/4 mx-auto mt-20  mb-20' >
    <div className="flex text-4xl font-bold mb-3 about w-full" >
        <div data-aos="fade-right">About</div> <div className="text-Orange ms-2" data-aos="zoom-in">Us</div>
    </div>

    <div className="flex pb-2">
        <div className="w-2/3 ">
            <p data-aos="zoom-in">Established in 2021 by the most experienced and ambitious Indonesian professional engineer from
                multi sector such as oil & gas, power generation, oleo chemical, pulp & paper and mining industry, we
                are
                specialist to supports client’s most need: professional engineer to support client’s project with a
                vision to be
                preferred regional player in to support national project development</p>
            <div className="grid grid-cols-2 gap-4 pt-4" >
                <div data-aos="zoom-in">
                    <img className='m-auto' src={Icon1} alt="" width={80} height={80} />
                    <p className='text-center font-bold my-2'>INTEGRITY</p>
                    <p className='text-center text-slate-500'>desa sdsadd asdas asdasd desa sdsadd asdas asdasd</p>
                </div>
                <div data-aos="zoom-in">
                    <img className='m-auto' src={Icon2} alt="" width={80} height={80} />
                    <p className='text-center font-bold my-3'>RESPOSSIBILITY</p>
                    <p className='text-center text-slate-500'>desa sdsadd asdas asdasd desa sdsadd asdas asdasd</p>
                </div>
                <div data-aos="zoom-in">
                    <img className='m-auto' src={Icon3} alt="" width={80} height={80} />
                    <p className='text-center font-bold my-3.5'>PROFESSIONALISM</p>
                    <p className='text-center text-slate-500'>desa sdsadd asdas asdasd desa sdsadd asdas asdasd</p>
                </div>
                <div data-aos="zoom-in">
                    <img className='m-auto' src={Icon4} alt="" width={80} height={80} />
                    <p className='text-center font-bold my-4'>ETHICS</p>
                    <p className='text-center text-slate-500'>desa sdsadd asdas asdasd desa sdsadd asdas asdasd</p>
                </div>
            </div>
        </div>
        <div className="overflow-auto my-auto ms-3 rounded-lg w-2/5 h-96" data-aos="fade-left" >
            <img src={Aboutimg} alt="" className='w-full h-full object-cover' />
        </div>
    </div>
</div>
);
}

export default About;