import About from "../Components/About"
import Header from "../Components/Navbar"
import Navbar from "../Components/Navbar"
import Slideimg from "../Components/Slideimg"
import Business from "../Components/Business"
import Hse from "../Components/Hse"
import Client from "../Components/Client"
import Footer from "../Components/Footer"
import Visimisi from "../Components/Visimisi"

const Home = () => {
  return (
    <>
      <Header/>
      <Slideimg/>
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