import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Qualification from './Components/Qualification';
import Job from './Components/Job';
import Skills from './Components/Skills';
import Certificates from './Components/Certifications';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div className="bg-[#02013d] px-8 md:px-20 text-white overflow-hidden">
        <Navbar/>
        <Landing/>
        <About/>
        <div className='flex gap-x-16 flex-col lg:flex-row py-16' id='skill'>
            <Qualification/>
            <Job/>
        </div>
        <Skills/>
        <Certificates/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        </div>
    </>
  );
}

export default App;
