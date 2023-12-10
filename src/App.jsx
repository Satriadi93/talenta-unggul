import Homepage from './Pages/Homepage'
import Contactpage from './Pages/Contactpage'
import Businesspage from './Pages/Businesspage'
import Articlepage from './Pages/Articlepage'
import Aboutpage from './Pages/Aboutpage'
import Notfound from './Pages/Notfound'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>
     {/* <Router basename="/talenta-unggul"> */}
     <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/article' element={<Articlepage/>}/>
        <Route path='/business' element={<Businesspage/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
