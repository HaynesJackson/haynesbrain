import { useState } from "react";
import './App.css';
import { LoadingScreen } from "./components/loadingscreen";
import { Navbar } from "./components/Navbar"
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <BrowserRouter>
      {!isLoaded && <LoadingScreen onComplete={() =>  setIsLoaded(true)} />}{" "}
        <div className={`min-h-screen pt-16 transition-opacity duration-900 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/> 
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
