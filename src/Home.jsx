import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import Cooking from './components/Cooking';
import IgButton from './components/IgButton';

function App() {
  const handleWheel = e => {
    e.preventDefault();
    const delta = Math.max(-1, Math.min(1, e.deltaY));
    const scrollSpeed = 20;
    scroll.scrollMore(delta * scrollSpeed);
  };

  return (
    <div className='app' onWheel={handleWheel}>
      <div>
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
        <IgButton />
      </div>
    </div>
  );
}

export default App;

