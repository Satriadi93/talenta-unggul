import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Article from "../../public/assets/article.png"
import Img6 from "../../public/assets/business2.jpg"
import Img7 from "../../public/assets/business3.jpg"
import Img8 from "../../public/assets/business4.jpg"

export const Articlepage = () => {
  return (
    <>
    <Navbar page='article' />
    <section>
      <div className="w-screen overflow-hidden relative">
        <img src={Article} alt="" className="h-40vh object-cover brightness-50 lg:w-screen" />
        <p
          className="absolute drop-shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl lg:text-5xl font-bold text-center">
          Article</p>
      </div>
      <div className="grid my-32 lg:my-16   grid-cols-1 lg:grid-cols-4">
        <div className="w-45vh overflow-hidden relative mx-auto drop-shadow-2xl hover:drop-shadow-sm rounded-3xl">
            <img src={Article} alt="" className=" h-40vh object-cover"  />
            <p className="text-3xl my-7 text-gray-500 lg:text-sm lg:my-3">7 Desember 2023</p>
            <p className="text-4xl my-7 hover:text-Orange lg:text-lg lg:my-3 cursor-pointer">Pemakaian teknologi iot untuk memonitoring kinerja apa kek </p>
            <p className="text-3xl text-gray-500 lg:text-sm ">Monitoring apa kek dengan manual itu memakan banyak waktu dan tenaga yang harus digunakan dengan adanya teknologi iot peemantauan apakek menjadi lebih mudah dilakukan karena sagala sesuatu dapat di jalan kan hanya dengan satu genggaman ponsel</p>
            <div className="h-1 bg-Orange mx-20 my-7 "></div>
        </div>
        <div className="w-45vh mt-20 lg:mt-0 overflow-hidden relative mx-auto drop-shadow-2xl hover:drop-shadow-sm rounded-3xl">
            <img src={Img6} alt="" className=" h-40vh object-cover"  />
            <p className="text-3xl my-7 text-gray-500 lg:text-sm lg:my-3">7 Desember 2023</p>
            <p className="text-4xl my-7 hover:text-Orange lg:text-lg lg:my-3 cursor-pointer">Pemakaian teknologi iot untuk memonitoring kinerja apa kek </p>
            <p className="text-3xl text-gray-500 lg:text-sm ">Monitoring apa kek dengan manual itu memakan banyak waktu dan tenaga yang harus digunakan dengan adanya teknologi iot peemantauan apakek menjadi lebih mudah dilakukan karena sagala sesuatu dapat di jalan kan hanya dengan satu genggaman ponsel</p>
            <div className="h-1 bg-Orange mx-20 my-7 "></div>
        </div>
        <div className="w-45vh mt-20 lg:mt-0 overflow-hidden relative mx-auto drop-shadow-2xl hover:drop-shadow-sm rounded-3xl">
            <img src={Img7} alt="" className=" h-40vh object-cover"  />
            <p className="text-3xl my-7 text-gray-500 lg:text-sm lg:my-3">7 Desember 2023</p>
            <p className="text-4xl my-7 hover:text-Orange lg:text-lg lg:my-3 cursor-pointer">Pemakaian teknologi iot untuk memonitoring kinerja apa kek </p>
            <p className="text-3xl text-gray-500 lg:text-sm ">Monitoring apa kek dengan manual itu memakan banyak waktu dan tenaga yang harus digunakan dengan adanya teknologi iot peemantauan apakek menjadi lebih mudah dilakukan karena sagala sesuatu dapat di jalan kan hanya dengan satu genggaman ponsel</p>
            <div className="h-1 bg-Orange mx-20 my-7 "></div>
        </div>
        <div className="w-45vh mt-20 lg:mt-0 overflow-hidden relative mx-auto drop-shadow-2xl hover:drop-shadow-sm rounded-3xl">
            <img src={Img8} alt="" className=" h-40vh object-cover"  />
            <p className="text-3xl my-7 text-gray-500 lg:text-sm lg:my-3">7 Desember 2023</p>
            <p className="text-4xl my-7 hover:text-Orange lg:text-lg lg:my-3 cursor-pointer">Pemakaian teknologi iot untuk memonitoring kinerja apa kek </p>
            <p className="text-3xl text-gray-500 lg:text-sm ">Monitoring apa kek dengan manual itu memakan banyak waktu dan tenaga yang harus digunakan dengan adanya teknologi iot peemantauan apakek menjadi lebih mudah dilakukan karena sagala sesuatu dapat di jalan kan hanya dengan satu genggaman ponsel</p>
            <div className="h-1 bg-Orange mx-20 my-7 "></div>
        </div>
      </div>



    </section>
    <Footer />
  </>
  )
}
export default Articlepage