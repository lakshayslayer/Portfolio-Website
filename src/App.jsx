import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Tech from "./components/Tech";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section> */}
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />


      <section>
        <BrowserRouter>
          <div className="relative z-0 bg-primary">
            <Tech/>
          </div>
        </BrowserRouter>
      </section>


      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
