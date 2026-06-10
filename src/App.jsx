import { LazyMotion, domAnimation } from 'motion/react';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-ink-base font-sans text-text-body">
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Awards />
          <Contact />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
