// Ad-agency/src/images/hero_bg.jpegimport "./App.css";
// import {BrowserRouetr , Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import  "./App.css";
import Partners from "./Components/Partners";
// import Video from "./Components/Video";
import { Audio } from 'react-loader-spinner'
;<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>

function App() {
  return (
    <div className="bg-dark">
      
      
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Blog/>
      {/* <Video/> */}
      <Partners/>
      <Contact/>
      <Footer/>
    
      </div>
      
     
  );
}

export default App;
