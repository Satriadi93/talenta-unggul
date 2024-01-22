import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Article from "./pages/Article";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router basename="/talenta-unggul">
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
