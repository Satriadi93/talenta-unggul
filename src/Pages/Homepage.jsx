import Navbar from "../Components/Navbar"
import Slideimg from "../Components/Slideimg"
import About from "../Components/About"
import Business from "../Components/Business"
import Visimisi from "../Components/Visimisi"
import Hse from "../Components/Hse"
import Client from "../Components/Product"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <>
      <Navbar page='home'/>
      <Slideimg />
      <br />
      <About/>
      <Visimisi/>
      <br />
      <Business/>
      <Hse/>
      <Client/>
      <Footer/>
    </>
  )
}

export default Home