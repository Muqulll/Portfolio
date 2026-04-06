import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToSkills = () => skillsRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#050110] text-slate-300 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_2px_2px,#8b5cf6_1px,transparent_0)] bg-[size:32px_32px]"></div>
      
      <Navbar 
        onAboutClick={scrollToAbout}
        onProjectsClick={scrollToProjects} 
        onSkillsClick={scrollToSkills} 
      />
      
      <main className="relative z-10 pt-16">
        {/* 0x01 is the Hero/Console */}
        <Hero onScrollClick={scrollToAbout} />
        
        <SectionDivider label="0x02_USER_FETCH" />
        <About sectionRef={aboutRef} />

        <SectionDivider label="0x03_REPO_LIST" />
        <Projects sectionRef={projectsRef} />

        <SectionDivider label="0x04_SYS_RESOURCES" />
        <Skills sectionRef={skillsRef} />
      </main>

      <footer className="py-20 border-t border-violet-900/10 text-center relative z-10 font-mono text-sm text-violet-500/50">
        muqulll@tosh-arch:~$ sudo shutdown -h now
        <span className="w-2 h-5 bg-violet-600 animate-pulse ml-2 inline-block align-middle"></span>
      </footer>
    </div>
  );
}

const SectionDivider = ({ label }) => (
  <div className="max-w-6xl mx-auto px-6 flex items-center gap-4 opacity-30 my-20">
    <div className="h-px flex-grow bg-violet-900/50"></div>
    <div className="font-mono text-[9px] tracking-[0.6em] text-violet-500 uppercase">{label}</div>
    <div className="h-px flex-grow bg-violet-900/50"></div>
  </div>
);

export default App;