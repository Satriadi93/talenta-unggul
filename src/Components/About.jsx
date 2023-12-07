import Aboutimg from '../../public/assets/oil.jpg';
import Icon1 from '../../public/assets/icon1.png';
import Icon2 from '../../public/assets/icon2.png';
import Icon3 from '../../public/assets/icon3.png';
import Icon4 from '../../public/assets/icon4.png';
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
<div className='w-full lg:w-4/5 mx-auto mt-20 mb-10  lg:mb-10' >
    <div className="flex text-8xl lg:text-4xl font-bold mb-20 lg:mb-5 justify-center lg:justify-start  w-full" >
        <div data-aos="fade-right" >About</div> <div className="text-Orange ms-2" data-aos="zoom-in">Us</div>
    </div>
    <div className="overflow-auto mx-auto rounded-lg w-45vh lg:hidden" data-aos="zoom-in" >
            <img src={Aboutimg} alt="" className='w-full h-full object-cover' />
        </div>
    <div className="flex lg:pb-2">
        <div className="w-full lg:w-2/3 ">
            <p data-aos="zoom-in" className="mx-24 lg:mx-0 text-4xl lg:text-xl my-10 lg:my-0 text-center lg:text-left ">Established in 2021 by the most experienced and ambitious Indonesian professional engineer from
                multi sector such as oil & gas, power generation, oleo chemical, pulp & paper and mining industry, we
                are
                specialist to supports client’s most need: professional engineer to support client’s project with a
                vision to be
                preferred regional player in to support national project development</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 mx-16 lg:mx-0 gap-y-32 lg:gap-y-0 " >
                <div data-aos="zoom-in">
                    <img className='m-auto w-60 lg:w-20 ' src={Icon1} alt=""  />
                    <p className='text-center font-bold my-4 lg:my-2 text-5xl lg:text-sm'>INTEGRITY</p>
                    <p className='text-center text-slate-500 mx-32 lg:mx-0 text-3xl lg:text-sm'>desa sdsadd asdas asdasd desa sdsadd asdas asdasd desasdsadd asdas asdasd desa sdsadd asdas asdasd</p>
                </div>
                <div data-aos="zoom-in">
                    <img className='m-auto w-60 lg:w-20' src={Icon2} alt=""  />
                    <p className='text-center font-bold my-4 lg:my-3.5 text-5xl lg:text-sm'>RESPOSSIBILITY</p>
                    <p className='text-center text-slate-500 mx-32 lg:mx-0 text-3xl lg:text-sm'>desa sdsadd asdas asdasd desa sdsadd asdas asdasd desasdsadd asdas asdasd desa sdsadd asdas asdasd</p>
                </div>
                <div data-aos="zoom-in">
                    <img className='m-auto w-60 lg:w-20' src={Icon3} alt=""  />
                    <p className='text-center font-bold my-4 lg:my-2 text-5xl lg:text-sm'>PROFESSIONALISM</p>
                    <p className='text-center text-slate-500 mx-32 lg:mx-0 text-3xl lg:text-sm'>desa sdsadd asdas asdasd desa sdsadd asdas asdasd desasdsadd asdas asdasd desa sdsadd asdas asdasd</p>
                </div>
                <div data-aos="zoom-in">
                    <img className='m-auto w-60 lg:w-20' src={Icon4} alt=""  />
                    <p className='text-center font-bold my-4 lg:my-3 text-5xl lg:text-sm'>ETHICS</p>
                    <p className='text-center text-slate-500 mx-32 lg:mx-0 text-3xl lg:text-sm'>desa sdsadd asdas asdasd desa sdsadd asdas asdasd desasdsadd asdas asdasd desa sdsadd asdas asdasd</p>
                </div>
            </div>
        </div>
        <div className="overflow-auto my-auto ms-3 rounded-lg w-2/5 h-96 hidden lg:block" data-aos="fade-left" >
            <img src={Aboutimg} alt="" className='w-full h-full object-cover' />
        </div>
    </div>
</div>
);
}

export default About;