import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import About from './components/About';
import Venue from './components/Venue';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar/>
      <ToastContainer/>
      <Hero/>
      <About/>
      <Schedule/>
      <Venue/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
