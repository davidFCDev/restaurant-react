import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import UbicationButton from './components/UbicationButton';
import Cooking from './components/Cooking';

function App() {

  return (
    <div className='app'>
        <div className=''>
          <Navbar />
        </div>
      <div>
          <Hero />
      </div>
      <div>
          <Gallery />
          <About />
          <Cooking />
          <Footer />
          <Contact />
          <UbicationButton />
      </div>
    </div>
  )
}

export default App
