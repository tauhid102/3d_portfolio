import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {About, Contact,Experience,Hero,Navbar,Works,Skills,Footer,StarsCanvas} from './components';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    window.addEventListener("load", () => {
      clearTimeout(timer);
      setTimeout(() => setLoading(false), 800);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader loading={loading} />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Skills/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
