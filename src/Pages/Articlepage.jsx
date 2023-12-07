import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

export const Articlepage = () => {
  return (
    <>
      <Navbar page='article'/>
       <div className="text-red-600 m-auto bg-red-200">Article Page</div>
      <Footer/>
    </>
  )
}
export default Articlepage