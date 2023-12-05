import About from "../Components/About"
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import Slideimg from "../Components/Slideimg"
import Business from "../Components/Business"
import Hse from "../Components/Hse"
import Client from "../Components/Client"
import Footer from "../Components/Footer"
import Visimisi from "../Components/Visimisi"
import App from "../Components/App"

const Home = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Slideimg/>
      <br />
      <About/>
      <Visimisi/>
      <br />
      {/* <hr className="border-t-2 border-Orange" /> */}
      <Business/>
      <Hse/>
      <Client/>
      <Footer/>
    </>
  )
}

export default Home