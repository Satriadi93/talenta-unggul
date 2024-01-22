import Product1 from '../../public/assets/product/client1.png'
import Product2 from '../../public/assets/product/client2.png'
import Product3 from '../../public/assets/product/client3.png'
import Product4 from '../../public/assets/product/client4.png'
import Product5 from '../../public/assets/product/client5.jpg'
import Product6 from '../../public/assets/product/client6.png'
import Product7 from '../../public/assets/product/client7.jpg'
import Product8 from '../../public/assets/product/client8.png'
import Product9 from '../../public/assets/product/client9.jpg'
import Product10 from '../../public/assets/product/client10.gif'
import Product11 from '../../public/assets/product/client11.jpg'
import Product12 from '../../public/assets/product/client12.png'
import Product13 from '../../public/assets/product/client13.jpg'
import Product14 from '../../public/assets/product/client14.jpg'
import Product15 from '../../public/assets/product/client15.jpg'
import Product16 from '../../public/assets/product/client16.png'
import Product17 from '../../public/assets/product/client17.png'
import Product18 from '../../public/assets/product/client18.jpg'
import Product19 from '../../public/assets/product/client19.png'
import Product20 from '../../public/assets/product/client20.png'
const Product = () => {
  return (
    <div style={{ height: `calc(100vh - 5rem)` }} className="p-10">
        <p className="text-2xl text-orange-500 font-bold text-center">PRODUCT EXPERIENCE</p>
        <div className="">
            <div className="grid grid-cols-8 mt-10">
                <img src={Product1} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer ' />
                <img src={Product2} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product3} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product4} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product5} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product6} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product7} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product8} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
            </div>
            <div className="grid grid-cols-8 mt-10">
                <img src={Product9} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product10} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product11} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product12} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product13} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product14} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product15} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product16} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
            </div>
            <div className="grid grid-cols-8 mt-10">
                <div className="col-span-2"></div>
                <img src={Product17} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product18} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product19} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
                <img src={Product20} alt="" className='w-32 my-auto hover:w-40 transition-all ease-in-out duration-700 cursor-pointer' />
            </div>

        </div>
    </div>
  )
}

export default Product