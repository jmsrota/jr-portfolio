import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationCertifications from "./components/EducationCertifications";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationCertifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
