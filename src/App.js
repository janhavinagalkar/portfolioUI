import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Work from "./components/Work";
import TechSkills from "./components/TechSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={process.env.PUBLIC_URL+"/"} element={<Home />} />
          <Route path={process.env.PUBLIC_URL+"/About"} element={<About />} />
          <Route path={process.env.PUBLIC_URL+"/TechSkills"} element={<TechSkills />} />
          <Route path={process.env.PUBLIC_URL+"/Work"} element={<Work />} />
          <Route path={process.env.PUBLIC_URL+"/Contact"} element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
