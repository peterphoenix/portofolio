import { DarkModeProvider } from './context/DarkModeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
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
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Peter Phoenix
            </p>
          </div>
        </footer>
      </div>
    </DarkModeProvider>
  );
}

export default App;
