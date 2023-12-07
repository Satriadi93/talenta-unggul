import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import ImgBusiness from "../../public/assets/About1.jpg"
import Img3 from "../../public/assets/image3.jpg"
import Img4 from "../../public/assets/image4.jpg"
import Mailstone from "../Components/Mailstone"


const Businesspage = () => {
  return (
  <>
    <Navbar page='about' />
    <section>
      <div className="w-screen overflow-hidden relative">
        <img src={ImgBusiness} alt="" className="h-40vh object-cover brightness-50" />
        <p
          className="absolute drop-shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl lg:text-5xl font-bold text-center">
          Our Business</p>
      </div>
      <div className="bg-about bg-cover relative lg:pb-20" style={{ backgroundImage: `url(${Img4})` }}>
        <div className="lg:hidden relative z-10 text-center py-16 text-8xl lg:text-6xl font-bold text-white">
          About <span className="text-Orange">Us</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative z-10 lg:mx-20 lg:pt-20">
          <div className="">
              <div className="hidden lg:block relative z-10 text-center py-5 text-8xl lg:text-6xl font-bold text-white">
              <div className="mb-5">About <span className="text-Orange">Us</span></div>
              <img src={Img3} alt="" className="mx-auto rounded-xl" />
            </div>
              <img src={Img3} alt="" className="mx-auto rounded-xl lg:hidden" />
          </div>
          <div className="col-span-2 lg:flex lg:items-center lg:justify-center ">
            <div className="flex">
            <p className="m-20 lg:m-0 text-justify text-4xl lg:text-sm xl:text-xl lg:h-full lg:px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quaerat ipsam animi commodi accusantium qui, earum atque veniam magnam deleniti et quo dolores voluptatem
              vero non nihil praesentium provident suscipit?<br /> <br />Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo, ipsum laboriosam, repellat earum optio nisi tempora similique veniam in do
              <br /> <br />loremque aut quaerat dolores facere odit laborum excepturi perspiciatis commodi fuga? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, non nemo. Veniam, nemo quas modi dolor
              laudantium reprehenderit ratione repudiandae quam voluptas provident, aspernatur similique mollitia ad, aut
              corrupti praesentium.
            </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-Pink opacity-50 lg:opacity-80 z-0 "></div>
      </div>
      <Mailstone/>
      <div className="">
        <div className="text-8xl font-bold py-20 text-white text-center ">Our <span className="text-Orange">Credentials</span></div>
        <div className="flex gap-x-20 mb-20 justify-center">
          <img src={Img3} alt="" className="w-60 " />
          <img src={Img3} alt="" className="w-60 " />
          <img src={Img3} alt="" className="w-60 " />
        </div>
      </div>
      
    </section>
    <Footer />
  </>
  )
}

export default Businesspage